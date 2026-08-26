#include "Common.hpp"

void Extension::SetIcons(TCHAR * filePath) // 0
{
	HICON hIcon = (HICON)LoadImage(nullptr, filePath, IMAGE_ICON, GetSystemMetrics(SM_CXSMICON), GetSystemMetrics(SM_CYSMICON), LR_LOADFROMFILE);

	if (!hIcon || hIcon == nullptr)
		return;// false;
	
	(HICON)SendMessage(rhPtr->rhHMainWin, WM_SETICON, ICON_SMALL, (LPARAM)hIcon);
	//SetClassLongPtr(rhPtr->rhHMainWin, GCLP_HICONSM, (LONG_PTR)hIcon);

	Runtime.GenerateEvent(0);
	currentSmallIcon = hIcon;
	currentBigIcon = hIcon;
	return;
}

void Extension::SetTaskbarIcon(TCHAR * filePath) // 1
{
	HICON hIcon = (HICON)LoadImage(nullptr, filePath, IMAGE_ICON, GetSystemMetrics(SM_CXICON), GetSystemMetrics(SM_CYICON), LR_LOADFROMFILE);

	if (!hIcon || hIcon == nullptr)
		return;// false;
	
	(HICON)SendMessage(rhPtr->rhHMainWin, WM_SETICON, ICON_BIG, (LPARAM)hIcon);
	//SetClassLongPtr(rhPtr->rhHMainWin, GCLP_HICON, (LONG_PTR)hIcon);

	Runtime.GenerateEvent(1);
	currentBigIcon = hIcon;
	return;
}

void Extension::ResetIcons() // 2
{
	
	HICON hIconSmall = originalSmallIcon;//(HICON)LoadImage(nullptr, filePath, IMAGE_ICON, GetSystemMetrics(SM_CXICON), GetSystemMetrics(SM_CYICON), LR_LOADFROMFILE);
	HICON hIconBig = originalBigIcon;//(HICON)LoadImage(nullptr, filePath, IMAGE_ICON, GetSystemMetrics(SM_CXICON), GetSystemMetrics(SM_CYICON), LR_LOADFROMFILE);

	if (!hIconSmall || !hIconBig || hIconSmall == nullptr || hIconBig == nullptr)
		return;
	
	(HICON)SendMessage(rhPtr->rhHMainWin, WM_SETICON, ICON_SMALL, (LPARAM)hIconSmall);
	(HICON)SendMessage(rhPtr->rhHMainWin, WM_SETICON, ICON_BIG, (LPARAM)hIconBig);
	//SetClassLongPtr(rhPtr->rhHMainWin, GCLP_HICON, (LONG_PTR)hIcon);

	Runtime.GenerateEvent(2);
	currentSmallIcon = hIconSmall;
	currentBigIcon = hIconBig;
	return;
}

void Extension::SetAutoResetProp(int propInput) // 3
{
	autoResetIcons = (propInput >= 1);
}