# FrontServer - Service

### [사용기술]

React: ^19.1.1
Vite: ^7.1.7
TypeScript: ~5.9.3
node.js: v24.11.0
npm: 11.6.1

Tailwind CSS: ^4.1.17
Zustand: ^5.0.8
TanStack Router: ^1.134.14
Axios: ^1.13.1

<br>

---

### [Git Conventiion]

##### [Branch] /n

    main : 개발완료. devepop 배포 전 기능
    feat/~ : 개발 중 기능
    develop : 개발자 테스트. live 배포 전 기능
    live : 실제 서비스

##### [Commit] /n

    Ex>
        [feat] 로그인기능 구현

    [feat] : 새로운 기능
    [fix] : 버그 수정
    [style] : 스타일 관련 코드 수정
    [refactor] : 코드 리팩토링
    [docs] : 문서 수정
    [test] : 테스트 코드 추가
    [chore] : 빌드, 인프라, 설정 관련 코드 수정

<br>

---

### 🔄 Workflow 1 (디자인<->FE개발자)

1. '디자인 to-bo 작업 목록' 및 'gitHub 칸반보드' 에 작업예정 내용 등록 (with 기획자)
2. gitHub readmap 에 디자인 작업일정 등록
3. Figma에서 디자인 작업 (wireframe, UI/UX 등)
4. 디자인 작업 이력 기록 (changelog.md , handoff-guide.md )
5. Figma Export 파일 업데이트 (.fig, 썸네일)
6. gutHub 칸반 보드에 작업완료 상세내용을 작성하고 Figma 공유 링크 추가
7. 디자인 작업 리뷰 (with 팀원)
8. 디자인 작업 완료 처리 (done 라벨)  
   (9. FE개발자는 디자이너가 작성한 칸반보드와 Inspect & Asset 를 참고하여 UI 개발)

### 🔄 Workflow 2 (FE개발자<->BE개발자)

1. BE개발자가 RESTful API 개발 (by swagger lib)
2. API 개발이 완료되는경우 칸반보드에 상세 작업내용을 작성
3. FE개발자는 칸반보드와 swagger api 문서를 참고하여 API 연동 개발
4. FE개발이 완료되면 칸반보드에 상세 작업내용을 작성
5. 작업 리뷰 (with 팀원)
6. 작업 완료처리 (done라벨)
