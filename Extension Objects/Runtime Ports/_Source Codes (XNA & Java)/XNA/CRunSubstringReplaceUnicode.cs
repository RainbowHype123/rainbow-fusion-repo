// Substring Replace Unicode - XNA port (All Platforms)

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using RuntimeXNA.Extensions;
using RuntimeXNA.Services;
using RuntimeXNA.RunLoop;
using RuntimeXNA.Sprites;
using RuntimeXNA.Conditions;
using RuntimeXNA.Actions;
using RuntimeXNA.Expressions;
using RuntimeXNA.Objects;
using RuntimeXNA.Params;
using RuntimeXNA.Frame;
using RuntimeXNA.OI;
using RuntimeXNA.Movements;

namespace RuntimeXNA.Extensions
{
    class CRunSubstringReplaceUnicode : CRunExtension
    {
        const int EXP_REPLACE1SUBSTRINGS = 0;
        const int EXP_REPLACE2SUBSTRINGS = 1;
        const int EXP_REPLACE3SUBSTRINGS = 2;
        const int EXP_SUBSTRINGOCCURRENCES = 3;

        int SecondsToConvert = 0;

        public override int getNumberOfConditions()
        {
            return 0;
        }

        public override bool createRunObject(CFile file, CCreateObjectInfo cob, int version)
        {
            return true;
        }

        public override bool condition(int num, CCndExtension cnd)
        {
            return false;
        }

        public override void action(int num, CActExtension act)
        {
            // No actions
        }

        public override CValue expression(int num)
        {
            switch (num)
            {
                case EXP_REPLACE1SUBSTRINGS:
                {
					string text = ho.getExpParam().getString();
                    string from1 = ho.getExpParam().getString();
                    string into1 = ho.getExpParam().getString();

                    string outputString = text.Replace(from1, into1);

                    return new CValue(outputString);
                }
                case EXP_REPLACE2SUBSTRINGS:
                {
					string text = ho.getExpParam().getString();
                    string from1 = ho.getExpParam().getString();
                    string into1 = ho.getExpParam().getString();
                    string from2 = ho.getExpParam().getString();
                    string into2 = ho.getExpParam().getString();

                    string outputString = text.Replace(from1, into1);
                    outputString = outputString.Replace(from2, into2);
                    
                    return new CValue(outputString);
                }
                case EXP_REPLACE3SUBSTRINGS:
                {
					string text = ho.getExpParam().getString();
                    string from1 = ho.getExpParam().getString();
                    string into1 = ho.getExpParam().getString();
                    string from2 = ho.getExpParam().getString();
                    string into2 = ho.getExpParam().getString();
                    string from3 = ho.getExpParam().getString();
                    string into3 = ho.getExpParam().getString();

                    string outputString = text.Replace(from1, into1);
                    outputString = outputString.Replace(from2, into2);
                    outputString = outputString.Replace(from3, into3);
                    
                    return new CValue(outputString);
                }
                case EXP_SUBSTRINGOCCURRENCES:
                {
					string inputString = ho.getExpParam().getString();
                    string findSubstring = ho.getExpParam().getString();

                    int count = 0;
                    int index = 0;

                    while ((index = inputString.IndexOf(findSubstring, index)) != -1) {
                        count++;
                        index += inputString.Length; // Move past this match
                    }

                    return new CValue(count);
                }
            }
            return new CValue(0);
        }
    }
}