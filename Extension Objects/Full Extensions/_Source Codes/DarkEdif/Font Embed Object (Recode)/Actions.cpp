#include "Common.hpp"

#include "FetchFontName.h"

#include <algorithm>
#include <string> // For debugging

// Credit goes to Defisym for a lot of the coding that I based this on. You can find it inside his NeoStr and WinAPI extensions.

std::vector<std::tstring> SplitPaths(const std::tstring& paths)
{
    std::vector<std::tstring> result;

    size_t start = 0;
    size_t end;

    while ((end = paths.find(L'|', start)) != std::tstring::npos)
    {
        result.push_back(paths.substr(start, end - start));
        start = end + 1;
    }

    result.push_back(paths.substr(start));

    return result;
}

void Extension::EmbedFont(const TCHAR * fontPath)
{
    for (const auto& filePath : SplitPaths(fontPath))
    {
        if (filePath.empty()) // Skip if the file path (or the input in general) is empty
        {
            continue;
        }

        std::tstring resolvedPath = DarkEdif::MakePathUnembeddedIfNeeded(this, filePath);

		if (!resolvedPath.empty() && resolvedPath[0] == _T('>'))
		{
			continue;
		}

		FontNames fontNames = GetFontFamilyNames(filePath.c_str()); // Get the font name (used for checks to prevent duplicate embeds of the same font)

		bool alreadyEmbedded = false;

		for (const auto& fontName : fontNames) // Check if the font is already inside the list of font names
		{
			if (std::find(embeddedFonts.begin(), embeddedFonts.end(), fontName) != embeddedFonts.end())
			{
				alreadyEmbedded = true;
				break;
			}
		}

		if (alreadyEmbedded)
		{
			continue;
		}

		int fontAdded = AddFontResourceEx(resolvedPath.c_str(), FR_PRIVATE, nullptr); // Embed the font :)

		// Debugging stuff
		/*
		MessageBoxW(
			nullptr,
			std::to_tstring(fontAdded).c_str(),
			filePath.c_str(),
			MB_OK
		);
		*/
		/*
		auto fontNames = GetFontFamilyNames(filePath.c_str());
		std::tstring debug;

		for (const auto& name : fontNames)
		{
			debug += name;
			debug += L"\n";
		}

		MessageBoxW(
			nullptr,
			debug.c_str(),
			L"Font Names",
			MB_OK
		);
        */

        if (fontAdded > 0)
        {
			for (const auto& fontName : fontNames)
			{
				if (std::find(embeddedFonts.begin(), embeddedFonts.end(), fontName) == embeddedFonts.end())
				{
					embeddedFonts.push_back(fontName); // Add to the font count for the "number of fonts added" expression
				}
			}
        }
    }
}

void Extension::RemoveFont(const TCHAR * fontPath)
{
    for (const auto& filePath : SplitPaths(fontPath))
    {
        if (filePath.empty())
        {
            continue;
        }

		std::tstring resolvedPath = DarkEdif::MakePathUnembeddedIfNeeded(this, filePath);

		if (!resolvedPath.empty() && resolvedPath[0] == _T('>'))
		{
			continue;
		}

		FontNames fontNames = GetFontFamilyNames(filePath.c_str()); // Get the font name (used for checks to prevent duplicate embeds of the same font)

		bool notEmbedded = true;

		for (const auto& fontName : fontNames) // Check if the font is already missing from the list of font names
		{
			if (std::find(embeddedFonts.begin(), embeddedFonts.end(), fontName) != embeddedFonts.end())
			{
				notEmbedded = false;
				break;
			}
		}

		if (notEmbedded)
		{
			continue;
		}
		
		// Keeping the behavior where it does not decrease the number if the removal was successful
        RemoveFontResourceEx(resolvedPath.c_str(), FR_PRIVATE, nullptr);
    }
}
