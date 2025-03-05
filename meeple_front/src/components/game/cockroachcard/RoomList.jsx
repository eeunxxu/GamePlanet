import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Lock, Plus, Users, Search, CircleHelp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CockroachAPI } from "../../../sources/api/CockroachAPI";
import CreateRoomModal from "./modal/CreateRoomModal";
import PasswordModal from "./modal/Passwordmodal"
import CockroachImg from "../../../assets/images/games/MainImage/Cockroach_Poker_Royal.png";
import GuideModal from "./modal/GuideModal";

const RoomList = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);
  const navigate = useNavigate();
  const profileData = useSelector((state) => state.profile.profileData);

  const fetchRooms = async () => {
    try {
      const roomList = await CockroachAPI.getRooms();
      setRooms(roomList);
    } catch (error) {
      console.error("방 목록 조회 오류:", error);
      setRooms([]);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const handleEnterRoom = async (room) => {
    try {
      const userNickname = profileData.userNickname

      if (room.isPrivate) {
        setSelectedRoom(room);
        setIsPasswordModalOpen(true);
      } else {
        await CockroachAPI.joinRoom({
          roomId: room.roomId,
          playerName: userNickname,
          password: "",
        });
        navigate(`/cockroach/${room.roomId}`);
      }
    } catch (error) {
      console.error("방 입장 오류:", error);
    }
  };

  const handleSuccessfulEntry = (roomId) => {
    navigate(`/game/cockroach/${roomId}`);
  };

  const filteredRooms = rooms.filter((room) =>
    room.roomTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-3">
      <div className="flex justify-between items-center mb-5 gap-4">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold text-white">바퀴벌레 포커</h1>
          <button onClick={() => setIsGuideModalOpen(true)}>
            <CircleHelp className="h-6 w-6 text-yellow-300 animate-pulse hover:text-yellow-300 transition-colors" />
          </button>
        </div>
        <div className="flex-1 max-w-[320px] relative ml-[420px]">
          <div className="mt-1">
            <input
              type="text"
              placeholder="방 제목으로 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-12 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-blue-900"
            />
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>
        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap"
        >
          <Plus size={20} />방 만들기
        </button>
      </div>

      <div className="bg-gray-900 bg-opacity-90 rounded-xl shadow-2xl p-8 border border-blue-900 h-[700px]">
        <div className="h-full overflow-y-auto custom-scrollbar">
          {filteredRooms.length === 0 ? (
            <div className="h-full flex items-center justify-center">
              <p className="text-xl text-blue-300">
                {searchTerm
                  ? "검색 결과가 없습니다"
                  : "현재 생성된 게임방이 없습니다"}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredRooms.map((room) => (
                <div
                  key={room.roomId}
                  className="bg-blue-900 bg-opacity-40 rounded-lg shadow-lg overflow-hidden group relative border border-blue-800 hover:border-blue-600 transition-all duration-300"
                >
                  <div className="bg-blue-950 h-32 flex items-center justify-center">
                    <img
                      src={CockroachImg}
                      alt="바퀴벌레 포커 이미지"
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-bold text-xl text-white">
                        {room.roomTitle}
                      </h3>
                      {room.isPrivate && (
                        <Lock size={18} className="text-blue-400" />
                      )}
                    </div>

                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-2 text-blue-300">
                        <Users size={16} />
                        <span>
                          {room.players.length}/{room.maxPeople}
                        </span>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-lg text-sm font-medium ${
                          room.isGameStart
                            ? "bg-red-900/50 text-red-300 border border-red-800"
                            : "bg-green-900/50 text-green-300 border border-green-800"
                        }`}
                      >
                        {room.isGameStart ? "게임 중" : "대기 중"}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-blue-300">
                        방장: {room.creator}
                      </span>
                      {room.players.length < room.maxPeople ? (
                        <button
                          onClick={() => handleEnterRoom(room)}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                        >
                          입장하기
                        </button>
                      ) : (
                        <button className="px-4 py-2 bg-gray-500/60 text-white rounded-lg transition-all duration-300 transform cursor-not-allowed">
                          입장하기
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <CreateRoomModal
        isOpen={isCreateModalOpen}
        onClose={() => {
          setIsCreateModalOpen(false);
          fetchRooms();
        }}
      />

      {selectedRoom && (
        <PasswordModal
          isOpen={isPasswordModalOpen}
          onClose={() => {
            setIsPasswordModalOpen(false);
            setSelectedRoom(null);
          }}
          roomId={selectedRoom.roomId}
          roomTitle={selectedRoom.roomTitle}
          onSuccessfulEntry={handleSuccessfulEntry}
        />
      )}

      <GuideModal
        isOpen={isGuideModalOpen}
        onClose={() => setIsGuideModalOpen(false)}
      />
    </div>
  );
};

export default RoomList;