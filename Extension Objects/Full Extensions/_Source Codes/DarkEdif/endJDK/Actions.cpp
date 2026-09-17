// Actions
#include "Common.hpp"

#include <Windows.h>
#include <shellapi.h>

void Extension::TerminateJdk()
{
    ShellExecuteA(NULL, "open", "taskkill.exe", "/IM java.exe /F", NULL, SW_HIDE);
	ShellExecuteA(NULL, "open", "taskkill.exe", "/IM javaw.exe /F", NULL, SW_HIDE);
    Runtime.GenerateEvent(0);
    /*
    STARTUPINFOA si = {};
    PROCESS_INFORMATION pi = {};

    si.cb = sizeof(si);

    char cmd[] = "C:\Windows\System32\taskkill.exe /IM java.exe /F";

    if (CreateProcessA(NULL, cmd, NULL, NULL, FALSE, CREATE_NO_WINDOW, NULL, NULL, &si, &pi))
    {
        CloseHandle(pi.hProcess);
        CloseHandle(pi.hThread);

        Runtime.GenerateEvent(1);
    }*//*
    else
    {
        DWORD err = GetLastError();
    }*/
}

/*
void Extension::TerminateJdk(int getPID)
{
    HANDLE hProcess = OpenProcess(PROCESS_TERMINATE, FALSE, getPID);

    if (hProcess)
    {
        TerminateProcess(hProcess, 0);
        CloseHandle(hProcess);
        Runtime.GenerateEvent(1);
    }
}

void Extension::TerminateJdkAlt()
{
    STARTUPINFOA si = { sizeof(si) };
    PROCESS_INFORMATION pi;

    TCHAR cmd[] = _T("C:\Windows\System32\taskkill.exe /IM java.exe /F");

    if (CreateProcessW( NULL, cmd, NULL, NULL, FALSE, CREATE_NO_WINDOW, NULL, NULL, &si, &pi))
    {
        CloseHandle(pi.hProcess);
        CloseHandle(pi.hThread);
        Runtime.GenerateEvent(1);
    }
}
*/