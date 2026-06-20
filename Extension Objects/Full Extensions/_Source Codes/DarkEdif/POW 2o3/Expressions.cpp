#include "Common.hpp"

#include <cmath>

int Extension::SquareParam(int IntegerInput)
{
	return IntegerInput * IntegerInput;
}

int Extension::CubeParam(int IntegerInput)
{
	return IntegerInput * IntegerInput * IntegerInput;
}

int Extension::PowFunc(int MainInput, int PowerInput)
{
	int result = 1;

    for (int i = 0; i < PowerInput; i++)
	{
        result *= MainInput;
	}

    return result;
}