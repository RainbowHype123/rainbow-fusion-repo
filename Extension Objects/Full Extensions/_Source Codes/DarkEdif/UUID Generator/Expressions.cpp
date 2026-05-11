#include "Common.hpp"

#include <random>
#include <sstream>
#include <string>

#include "uuid_v4.h"
// Github page with UUID headers: https://github.com/crashoz/uuid_v4

const TCHAR * Extension::randomUUIDStr()
{
	UUIDv4::UUIDGenerator<std::mt19937_64> uuidGenerator;

	UUIDv4::UUID uuid = uuidGenerator.getUUID();

	std::string s = uuid.str();
	std::wstring ws(s.begin(), s.end());
	
	// Where I got this setup from: https://blog.devgenius.io/most-efficient-way-of-generating-uuid-in-c-a10242a77946

	return (TCHAR *)Runtime.CopyString(ws.c_str());
}
