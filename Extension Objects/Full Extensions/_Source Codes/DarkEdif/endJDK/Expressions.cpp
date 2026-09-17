// Expressions
#include "Common.hpp"

/*
int Extension::JdkActiveFlag()
{
	// Find PID
	int pid = 14320;
	
	HANDLE hProcess = OpenProcess(PROCESS_QUERY_LIMITED_INFORMATION, FALSE, pid);

	if(hProcess)
	{
		CloseHandle(hProcess);
		return 1;
	}

	return 0;
}
*/
int Extension::AutoKillJdkProp()
{
	return (int)killJdkOnAppStart;
}