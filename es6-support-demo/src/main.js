import { add, subtract } from "./mathOperations.js";
import {
  displayAdditionResult,
  displaySubtractionResult,
} from "./displayResults.js";

const num1 = 10;
const num2 = 5;

const additionResult = add(num1, num2);
const subtractionResult = subtract(num1, num2);

displayAdditionResult(additionResult);
displaySubtractionResult(subtractionResult);
