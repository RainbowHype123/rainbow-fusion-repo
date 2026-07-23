#include "Common.hpp"

const TCHAR * Extension::ExpressionCommentStr(const TCHAR * Comment)
{
	return Runtime.CopyString(_T(""));
}

int Extension::ExpressionCommentInt(int Comment)
{
	return 0;
}
