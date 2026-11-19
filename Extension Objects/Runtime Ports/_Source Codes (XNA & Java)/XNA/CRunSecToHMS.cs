// Seconds to HMS Object - XNA port (All Platforms)

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
    class CRunSecToHMS : CRunExtension
    {
        const int ACT_CONVERTSECONDS = 0;

        const int EXP_GETHOURS = 0;
        const int EXP_GETMINUTES = 1;
        const int EXP_GETSECONDS = 2;

        int ConvertedSeconds = 0;
        int ConvertedMinutes = 0;
        int ConvertedHours = 0;
        int totalStoredSeconds = 0;

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
            switch (num)
            {
                case ACT_CONVERTSECONDS:
                {
                    int readThisInput = act.getParamExpression(rh, 0);

                    if (readThisInput <= 0)
                    {
                        totalStoredSeconds = 0;
                        ConvertedSeconds = 0;
                        ConvertedMinutes = 0;
                        ConvertedHours = 0;
                        break;
                    }

                    if (readThisInput != totalStoredSeconds)
                    {
                        totalStoredSeconds = readThisInput;
                        ConvertedSeconds = totalStoredSeconds % 60;
                        ConvertedMinutes = (totalStoredSeconds / 60) % 60;
                        ConvertedHours = totalStoredSeconds / 3600;
                    }
                }
            }
        }

        public override CValue expression(int num)
        {
            switch (num)
            {
                case EXP_GETSECONDS:
                {
					return new CValue(ConvertedSeconds);
                }
                case EXP_GETMINUTES:
                {
					return new CValue(ConvertedMinutes);
                }
                case EXP_GETHOURS:
                {
					return new CValue(ConvertedHours);
                }
            }
            return new CValue(0);
        }
    }
}