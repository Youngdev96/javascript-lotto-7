# javascript-lotto-precourse

## 📋 기능 명세서

### 1. 게임 준비

- [x] 구입 금액 입력 안내 문구 출력 `문구: 구입금액을 입력해 주세요.`
- [x] 구입 금액 유효성 검증
- [x] 구매한 로또 수량 안내 문구 출력 `문구: #개를 구매했습니다.`
- [x] 로또 번호 자동 생성 (1~45 중 6개 번호)
  - [x] 로또 번호 유효성 검사 (추가)
- [x] 로또 목록 생성
- [x] 구매한 로또 목록 출력

### 2. 게임 실행

- [x] 당첨 번호 입력 안내 `문구: 당첨 번호를 입력해 주세요.`
- [ ] 당첨 번호 유효성 검증
- [ ] 보너스 번호 입력 안내 `문구: 보너스 번호를 입력해 주세요.`
- [ ] 보너스 번호 유효성 검증
- [ ] 당첨 여부 확인 및 등수 계산

### 3. 게임 결과

- [ ] 당첨 통계 헤더 출력 `문구: 당첨 통계`
- [ ] 등수 별 당첨 내역 출력
  ```jsx
  3개 일치 (5,000원) - 1개
  4개 일치 (50,000원) - 0개
  5개 일치 (1,500,000원) - 0개
  5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
  6개 일치 (2,000,000,000원) - 0개
  ```
- [ ] 총 수익률 계산 기능 구현
- [ ] 총 수익률 출력 `문구: 총 수익률은 ##.#%입니다.`

## 💣 상황 별 예외 처리

`[ERROR]`로 시작하는 메시지와 함께 `Error`를 발생시키고 해당 메시지를 출력한 다음 해당 지점부터 다시 입력을 받는다.

### 1. 구입 금액이 올바르지 않은 경우

- [x] 1,000원 단위로 나누어 떨어지지 않는 경우 예외 처리

### 2. 랜덤 번호가 올바르지 않은 경우

- [x] 중복되는 번호가 있는 경우 예외 처리
- [x] 입력한 번호 중 숫자 1미만 45 초과인 경우

### 3. 당첨 번호가 올바르지 않은 경우

- [ ] 중복되는 번호가 있는 경우 예외 처리
- [ ] 입력한 번호 중 숫자 1미만 45 초과인 경우
