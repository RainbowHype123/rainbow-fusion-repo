// String Repeater Object - XNA port (All Platforms)

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
    class CRunStringRepeater : CRunExtension
    {
        const int EXP_REPEATSTRING = 0;
        const int EXP_REPEATCHARS = 1;

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
                case EXP_REPEATSTRING:
                {
					string inputString = ho.getExpParam().getString();
                    int repeatCount = (int)ho.getExpParam().getDouble();

                    string outputString = "";

                    for (int i = 0; i < repeatCount; i++)
                    {
                        outputString += inputString;
                    }

                    return new CValue(outputString);
                }
                case EXP_REPEATCHARS:
                {
					string inputString = ho.getExpParam().getString();
                    int charCount = (int)ho.getExpParam().getDouble();

                    // Clamp the value to a valid range
                    charCount = Math.Max(0, Math.Min(charCount, inputString.Length));

                    String outputString = inputString + inputString.substring(0, charCount);
                    
                    return new CValue(outputString);
                }
            }
            return new CValue(0);
        }
    }
}