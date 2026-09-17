// Conditions
#include "Common.hpp"

bool Extension::OnJdkTerminated()
{
	return true;
}

// I think this condition will have to do something similar to how the "terminate JDK" action finds the process ID for the JDK
/*
bool Extension::IsJdkActive()
{
	// Find PID
	int pid = 14320;
	
	HANDLE hProcess = OpenProcess(PROCESS_QUERY_LIMITED_INFORMATION, FALSE, pid);

	if(hProcess)
	{
		CloseHandle(hProcess);
		return true;
	}

	return false;
}
*/