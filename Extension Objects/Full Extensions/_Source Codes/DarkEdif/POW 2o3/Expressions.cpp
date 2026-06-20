#include "Common.hpp"

#include <cmath>

float Extension::SquareParam(float IntegerInput)
{
	return IntegerInput * IntegerInput;
}

float Extension::CubeParam(float IntegerInput)
{
	return IntegerInput * IntegerInput * IntegerInput;
}

float Extension::PowFunc(float BaseInput, float ExponentInput)
{
    return exp(ExponentInput * log(BaseInput));
}