import ERROR_MESSAGE from '../constants/errorMessage.js';
import CONSTANT from '../constants/constant.js';

class UserLottoValidate {
  runAllFunction(numbers) {
    this.validateDuplicateNumber(numbers);
    this.validateNumberRange(numbers);
    return numbers;
  }

  validateDuplicateNumber(numbers) {
    const setNumbers = new Set(numbers);
    if (setNumbers.size !== 6) {
      throw new Error(ERROR_MESSAGE.LOTTO_LENGTH_ERROR);
    }
  }

  validateNumberRange(numbers) {
    numbers.forEach((number) => {
      if (
        number < CONSTANT.LOTTO_MIN_NUMBER ||
        number > CONSTANT.LOTTO_MAX_NUMBER
      ) {
        throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_RANGE_ERROR);
      }
    });
  }
}
export default UserLottoValidate;