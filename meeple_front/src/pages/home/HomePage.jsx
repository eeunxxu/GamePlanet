import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import BurumabulRoomCreateModal from "../../components/game/burumabul/BurumabulRoomCreateModal";
import { useSelector } from "react-redux";
import { GameInfoAPI } from "../../sources/api/GameInfoAPI";
import { Star } from "lucide-react";
import CockroachPokerRoyalMainImg from "../../assets/images/games/MainImage/Cockroach_Poker_Royal.png";
import BurumabulMainImg from "../../assets/images/games/MainImage/BuruMabul.jpg";
import CatchMindMainImg from "../../assets/images/games/MainImage/CatchMind.jpg";
import Loading from "../../components/Loading";

const HomePage = () => {
  const navigate = useNavigate();
  const [isCreateBurumabulRoomModalOpen, setIsCreateBurumabulRoomModalOpen] =
    useState(false);
  const [gameList, setGameList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const userId = useSelector((state) => state.user.userId);

  useEffect(() => {
    const path = window.location.pathname;
    if (!userId && !path.includes("/game/")) {
      navigate("/");
      return;
    }
  }, [userId, navigate]);

  useEffect(() => {
    const fetchGameList = async () => {
      try {
        setIsLoading(true);
        const response = await GameInfoAPI.getGameInfoList();
        setGameList(response.gameInfoList || []);
      } catch (error) {
        setGameList([]);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    };

    fetchGameList();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const GameCard = ({ gameInfo }) => {
    return (
      <div className="bg-gray-900 bg-opacity-80 rounded-xl shadow-lg overflow-hidden group relative border border-cyan-500/60 hover:border-cyan-300 transition-all duration-300 h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative h-48 overflow-hidden">
          <img
            src={
              gameInfo.game.gameId === 1
                ? CockroachPokerRoyalMainImg
                : gameInfo.game.gameId === 2
                ? BurumabulMainImg
                : CatchMindMainImg
            }
            alt={gameInfo.game.gameName}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-4 backdrop-blur-sm">
            <button
              onClick={() =>
                navigate(`/game-info/${gameInfo.gameInfoId}`, {
                  state: { gameInfo: gameInfo },
                })
              }
              className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors transform hover:scale-105 duration-300"
            >
              GAME INFO
            </button>
            <button
              onClick={() =>
                gameInfo.game.gameId === 1
                  ? null
                  : gameInfo.game.gameId === 2
                  ? navigate("/burumabul/room-list")
                  : navigate("/catch-mind")
              }
              disabled={gameInfo.game.gameId === 1}
              className={`px-6 py-2 rounded-full transition-colors transform hover:scale-105 duration-300 ${
                gameInfo.game.gameId === 1
                  ? "bg-gray-400 text-gray-200 cursor-not-allowed w-[120px]"
                  : "bg-cyan-600 text-white hover:bg-cyan-700"
              }`}
            >
              {gameInfo.game.gameId === 1 ? "FIXING" : "GAME PLAY"}
            </button>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-400 bg-clip-text text-transparent">
              {gameInfo.game.gameName}
            </h2>
          </div>
          <div className="text-white ml-7">
            {(() => {
              switch (gameInfo.game.gameName) {
                case "바퀴벌레 포커":
                  return (
                    <div>
                      거짓말처럼 솔직한 당신의 표정,<br></br> 바퀴벌레와
                      함께라면 포커페이스도 순삭!
                    </div>
                  );
                case "부루마불":
                  return (
                    <div>
                      내 세금으로 지은 지하철로 순삭이동!<br></br> 현실에선
                      못하는 부동산 재테크의 꿈
                    </div>
                  );
                default:
                  return (
                    <div>
                      손은 뻣뻣해도 마음은 피카소,<br></br> 그림 재능은 선택이
                      아닌 필수!
                    </div>
                  );
              }
            })()}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="min-h-screen p-8 relative z-5">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900 bg-opacity-80 rounded-xl shadow-2xl p-3 backdrop-blur-sm border border-cyan-500/50 h-[750px]">
            <h1 className="text-[43px] font-bold mb-3 text-center bg-gradient-to-r from-cyan-500 to-cyan-500 bg-clip-text text-transparent">
              GAME LIST
            </h1>

            <div className="border-t border-cyan-500/30 pt-8"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gameList.map((gameInfo) => (
                <GameCard key={gameInfo.gameInfoId} gameInfo={gameInfo} />
              ))}
            </div>

            <div className="mt-[120px] text-center">
              <p className="text-gray-400 text-3xl font-medium italic animate-pulse">
                🛠️ ... COMMING SOON ... 🛠️
              </p>
            </div>
          </div>
        </div>
      </div>

      {isCreateBurumabulRoomModalOpen &&
        createPortal(
          <BurumabulRoomCreateModal
            onClose={() => setIsCreateBurumabulRoomModalOpen(false)}
          />,
          document.body
        )}

      <style jsx="true" global="true">{`
        @keyframes shooting-star {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(-45deg);
            opacity: 1;
          }
          100% {
            transform: translateX(200%) translateY(200%) rotate(-45deg);
            opacity: 0;
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-shooting-star {
          animation: shooting-star 3s linear infinite;
        }

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
