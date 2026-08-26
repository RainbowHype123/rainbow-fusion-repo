#include "Common.hpp"

const TCHAR * Extension::GetMmfHwnd() // 0
{
	// This process is meant to convert a pointer to an actual string. Otherwise, this would crash the app even if VS let you compile it.
	TCHAR buffer[32];
	_stprintf_s(buffer, _T("%p"), rhPtr->rhHMainWin);
	return Runtime.CopyString(buffer);
}

const TCHAR * Extension::GetHeaderIconHwnd() // 1
{
	TCHAR buffer[32];
	_stprintf_s(buffer, _T("%p"), currentSmallIcon);
	return Runtime.CopyString(buffer);
}

const TCHAR * Extension::GetTaskbarIconHwnd() // 2
{
	TCHAR buffer[32];
	_stprintf_s(buffer, _T("%p"), currentBigIcon);
	return Runtime.CopyString(buffer);
}

const TCHAR * Extension::GetOGHeaderIconHwnd() // 3
{
	TCHAR buffer[32];
	_stprintf_s(buffer, _T("%p"), originalSmallIcon);
	return Runtime.CopyString(buffer);
}

const TCHAR * Extension::GetOGTaskbarIconHwnd() // 4
{
	TCHAR buffer[32];
	_stprintf_s(buffer, _T("%p"), originalBigIcon);
	return Runtime.CopyString(buffer);
}

int Extension::GetAutoResetProp() // 5
{
	return static_cast<int>(autoResetIcons);
}