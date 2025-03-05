# GAME PLANET

> 나만의 커스텀을 통해 여러 사람들과 함께 게임을 즐겨보자 !
### 보안 상의 이유로 프론트코드만 업로드했습니다.
## 📋 목차

1. [프로젝트 소개](https://www.notion.so/ReadMe-1a0cbd37385a807680fedb5d86ec20da?pvs=21)
2. [기술 스택](https://www.notion.so/ReadMe-1a0cbd37385a807680fedb5d86ec20da?pvs=21)
3. [시작 가이드](https://www.notion.so/ReadMe-1a0cbd37385a807680fedb5d86ec20da?pvs=21)
4. [아키텍처](https://www.notion.so/ReadMe-1a0cbd37385a807680fedb5d86ec20da?pvs=21)
5. [주요 기능](https://www.notion.so/ReadMe-1a0cbd37385a807680fedb5d86ec20da?pvs=21)
6. [프로젝트 진행 과정](https://www.notion.so/ReadMe-1a0cbd37385a807680fedb5d86ec20da?pvs=21)
7. [팀원 소개](https://www.notion.so/ReadMe-1a0cbd37385a807680fedb5d86ec20da?pvs=21)
8. [느낀 점](https://www.notion.so/ReadMe-1a0cbd37385a807680fedb5d86ec20da?pvs=21)

## 프로젝트 소개

### 💡 기획 배경

- #### 보드게임이나 게임 특성상 최소 2인부터 많게는 6인까지 하게 되는데, 사람을 모으기 힘들다는 어려움과 실제로 만나서 플레이할 장소를 구해야 한다는 시간적 공간적 제약이 있었습니다.
- #### 또한, 게임을 하려면 직접 구매하거나 보드게임 카페에 가서 돈을 내고 해야 한다는 아쉬움이 있었습니다.
- #### 또한 컨텐츠의 소모성이 심해서 한 두번하면 질리는 경우가 잦았습니다.
- #### 저희는 이러한 불편한 점과 문제점들을 해결하고자 웹 게임 서비스를 기획하게 되었습니다.

### 🎯 서비스 목표

- #### 커뮤니티 기능을 통해서 해당 게임에 대한 정보를 얻고, 리뷰를 통해서 게임에 대한 사람들의 개인적인 의견들을 볼 수 있어서 게임에 대한 꿀팁을 얻거나 취향에 맞는 게임을 선택하는데 도움을 줄 수 있습니다.
- #### 게임의 커스텀 기능을 통해서 사용자가 원하는 게임의 테마나 디자인을 할 수 있어서 하나의 게임을 하더라도 질리지 않고 사람들과 꾸준히 즐길 수 있도록 합니다.
- #### 실제로 존재하는 게임들과 최대한 유사하게 제작하여 기존 게임을 이용하던 사용자들이 룰을 익히는데 시간이 들지 않도록 하여 접근성을 최대화 했고, 때문에 보다 몰입도 높은 게임을 즐길 수 있습니다.
- #### 청정한 게임 환경을 위해서 AI 욕설 감지 프로그램을 동작하여 사용자들의 폭언과 욕설을 스스로 잡아내어 관리자에게 보내줍니다.

### ⏰ 개발 기간

### 2025.01.06 ~ 2025.02.21 (6주)

### 📌 주요 기능

- #### 게임 커스텀
  게임 요소를 직접 제작하고 수정할 수 있도록 지원합니다.
  관리자 심사 기능을 통해 유저에게 안전한 콘텐츠를 제공합니다.
- #### 게임 플레이
  캐치마인드/부루마불 게임을 제공합니다.
  플레이어 신고 기능을 통해 부적절한 유저를 제재할 수 있습니다.
  화상 채팅 및 레벨·점수 제도를 도입해, 게임에 더욱 몰입할 수 있는 환경을 조성합니다.
- #### AI 욕설 탐지
  화상 채팅 중 부적절한 언행을 AI가 즉시 감지하여 제재를 적용합니다.

# 🛠️ SKILLS

| 분야         | 기술 스택                                                                                                                       | 구현 기능                                                      |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| **Frontend** | ![React](https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=white)                             | • 컴포넌트 기반 UI 개발<br>• SPA(Single Page Application) 구현 |
|              | ![Redux](https://img.shields.io/badge/-Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)                             | • 전역 상태 관리<br>• 사용자 정보, 게임 상태 관리              |
|              | ![TailwindCSS](https://img.shields.io/badge/-Tailwind.CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)          | • UI 스타일링<br>• 반응형 디자인 구현                          |
|              | ![Three.JS](https://img.shields.io/badge/-Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white)                  | • 3D 게임 그래픽 구현<br>• 3D 모델링 렌더링                    |
|              | ![Canvas](https://img.shields.io/badge/-Canvas-E72429?style=for-the-badge&logo=canvas&logoColor=white)                          | • 2D 그림 그리기기 구현<br>• 실시간 그림 화면 공유             |
|              | ![Socket.io](https://img.shields.io/badge/-Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white)               | • 실시간 게임 통신<br>• 채팅 기능 구현                         |
|              | ![WebRTC](https://img.shields.io/badge/-WebRTC-333333?style=for-the-badge&logo=webrtc&logoColor=white)                          | • 실시간 음성/영상 통신<br>• P2P 연결 구현                     |
| **Backend**  | ![SpringBoot](https://img.shields.io/badge/-Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)             | • RESTful API 서버 구축<br>• 비즈니스 로직 처리                |
|              | ![MySQL](https://img.shields.io/badge/-MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)                             | • 사용자 데이터 관리<br>• 게임 데이터 저장                     |
|              | ![Redis](https://img.shields.io/badge/-Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)                             | • 실시간 데이터 캐싱<br>• 세션 관리                            |
|              | ![OpenVidu](https://img.shields.io/badge/-Open_Vidu-1F3A5E?style=for-the-badge&logo=openvidu&logoColor=white)                   | • 화상 채팅 서버 구축<br>• 미디어 서버 관리                    |
|              | ![JPA](https://img.shields.io/badge/-JPA-1F3A5E?style=for-the-badge&logoColor=white)                                            | • 객체-관계 매핑<br>• 데이터베이스 연동                        |
|              | ![SpringSecurity](https://img.shields.io/badge/-Spring_Security-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white) | • 사용자 인증/인가<br>• 보안 기능 구현                         |
| **Infra**    | ![Docker](https://img.shields.io/badge/-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)                          | • 컨테이너화 배포<br>• 개발/운영 환경 일치화                   |
|              | ![Jenkins](https://img.shields.io/badge/-Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white)                       | • CI/CD 파이프라인 구축<br>• 자동화된 빌드/배포                |
|              | ![Nginx](https://img.shields.io/badge/-NGINX-009639?style=for-the-badge&logo=nginx&logoColor=white)                             | • 웹 서버 구축<br>• 로드 밸런싱                                |
| **AI**       | ![Whisper](https://img.shields.io/badge/-Whisper-4B7BEC?style=for-the-badge&logo=openai&logoColor=white)                        | • 음성 인식 기능<br>• 음성-텍스트 변환                         |
|              | ![Electron](https://img.shields.io/badge/-Electron-47848F?style=for-the-badge&logo=electron&logoColor=white)                    | • 데스크톱 애플리케이션 배포<br>• 크로스 플랫폼 지원           |

## 📜 설계 문서

- ### 시스템 아키텍처

![SystemArchitecture](README_images/Meeple_SystemArchitecture.png)

- ### DB 설계 (ERD)

![ERD](README_images/Meeple_ERD.png)

- ### API 설계

- ### WBS

![WBS](README_images/Meeple_WBS.png)

- ### 요구사항 명세서
  ![Requirements](README_images/Meeple_Requirements.png)

## ✅ 주요 기능

### 00. 접속 화면

![MainPage](README_images/MainPage.gif)

### 01. 회원가입, 로그인

![SignUp](README_images/SignUp.gif)
![LogIn](README_images/LogIn.gif)

#### `회원가입`

- **이메일 유효성 검사** : 정규 표현식에 맞는 형식만 가능
- **비밀번호 유효성 검사** : 영문, 숫자, 특수문자 각 1개 이상 조합하여 9-16자
- **이름 유효성 검사** : 한글만 조합해 2-5자
- **닉네임 유효성 검사** : 한글, 영문, 숫자만 조합해 2-10자

#### `로그인`

- **이메일**과 **비밀번호**로 로그인

### 02. AI 욕설 감지 Meeple 앱

![MeepleApp](README_images/MeepleApp.gif)

- #### 프로그램을 설치하지 않으면 게임방 생성 및 입장이 불가
- #### Meeple 로그인 후 입장 가능

### 03. 캐치마인드

![CatchMind](README_images/CatchMind.gif)

- #### 그림을 그리면 상대방에서도 실시간으로 그림화면이 공유
- #### 일반 채팅과 정답채팅을 구별해서 인식
- #### 정답 채팅 입력 시 점수 획득
- #### 그리기 도구에서 붓의 굵기와 색 변경 가능

### 04. 게임 커스텀

![Custom](README_images/Custom.gif)

- #### 부루마불에서 이용할 보드판 커스텀 가능
- #### 보드판 커스텀 후 관리자에게 승인 요청을 전송
- #### 관리자가 승인을 하면 부루마불 게임 전 커스텀 보드판 사용 가능

### 05. 부루마불

![Burumabul](README_images/Burumabul.gif)

- #### 커스텀된 보드판을 대기방에서 선택 가능
- #### 게임 입장하면 커스텀된 사진과 마불(재화)이 적용
- #### 기존 부루마불과 같은 룰 적용

### 06. 관리자

![Admin](README_images/Admin.gif)

- #### 회원 목록 조회 가능, 회원 프로필 수정
- #### 회원 탈퇴 가능, 커스텀 게임 심사
- #### 유저 신고 목록 조회, 신고 처리
- #### AI 욕설 감지 조회 및 처리

## 👨‍👩‍👧‍👦 멤버 소개

![TeamIntroduce](README_images/Meeple_TeamIntroduce.png)

## 느낀 점

### 강은수

이번 프로젝트는 제 첫 6주간의 다소 장기간의 프로젝트였습니다. 시간이 충분하다고 생각했고, 새로운 기술들과 처음 해보는 게임이라는 주제를 다룸에 있어 제 자신이 막힘없이 수월하게 해낼 수 있다고 믿었습니다. 그러나 실제로 6주라는 개발 기간은 에러 없이 예상한 대로 완벽한 개발을 하기엔 턱없이 부족한 시간이었습니다. 개발 도중 Three.js를 활용하여 3D 주사위를 굴리는 동작 과정에서 예상치 못한 GPU 초과 문제를 직면하여 기간 안에 이를 해결하기 위해 스스로 학습하며 열심히 노력하였지만, 완벽하게 해결하지 못하여 다른 방식으로 주사위 기능을 구현해야만 했습니다. 기회가 된다면, WebGL Context Lost 문제를 꼭 해결하여 주사위 또한 3D로 동작하게 하고 싶습니다. 부루마불 게임을 제작하면서 마주한 예상치 못한 오류로 인해 일정 관리에 차질이 생기고 예상한 개발 완수 기간보다 실제 개발 완수 기간이 다소 늦춰졌습니다. 이로 인해 할 수 있을까란 막막함에 많이 힘들었지만, 팀원들의 격려와 응원으로 개발을 마무리할 수 있었습니다.

완성된 프로젝트를 보며 1. 컴포넌트의 구조를 더 적절하게 구성할 수 있지 않았을까, 2. Redux를 활용하여 상태 관리를 더욱 철저하게 했어야 했다, 3. 일정관리를 더욱 잘 해야 했다, 4. 일의 우선순위를 매겨서 잘 지켜야겠다 등등 여러 값진 교훈을 배웠고, 다음 프로젝트에선 이번 경험을 바탕으로 더욱 수월하게 진행할 수 있겠다는 생각을 했습니다. Meeple 팀원들과 함께 고생하며 완성해 낸 GamePlanet이 좋은 결과를 얻게 되어서 정말 기쁘고, 동료들과 함께 개발 프로젝트를 진행할 수 있어서 정말 값진 경험이었습니다.
