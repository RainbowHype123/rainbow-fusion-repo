#include "Behind_The_RuntimeExtension.h"
#include "Application.h"
#include "GraphicsBackend.h"

void Behind_The_RuntimeExtension::ActComment() {
	// Return nothing
}

void Behind_The_RuntimeExtension::ActCommentObj() {
	// Return nothing
}

bool Behind_The_RuntimeExtension::CndComment() const {
	return true;
}

bool Behind_The_RuntimeExtension::CndCommentObj() const {
	return true;
}

int Behind_The_RuntimeExtension::ExpCommentInt(bool enabled) {
	return 0;
}

std::string Behind_The_RuntimeExtension::ExpCommentStr(bool shown) {
	return "";
}