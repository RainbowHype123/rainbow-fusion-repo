// Behind The Runtime - XNA port (All Platforms)
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
    class CRunBehind_The_Runtime : CRunExtension
    {
        const int CND_COMMENT = 0;
        const int CND_COMMENTOBJ = 1;
        
        const int ACT_COMMENT = 0;
        const int ACT_COMMENTOBJ = 1;

        const int EXP_COMMENTINT = 0;
        const int EXP_COMMENTSTR = 1;

        public override int getNumberOfConditions()
        {
            return 2;
        }

        public override bool createRunObject(CFile file, CCreateObjectInfo cob, int version)
        {
            return true;
        }

        public override bool condition(int num, CCndExtension cnd)
        {
            switch (num)
            {
                case CND_COMMENT:
                    return true;
                case CND_COMMENTOBJ:
                    return true;
            }
            return false;//won't happen
        }

        public override void action(int num, CActExtension act)
        {
            switch (num)
            {
                case ACT_COMMENT:
                    break;
                case ACT_COMMENTOBJ:
                    break;
            }
        }

        public override CValue expression(int num)
        {
            switch (num)
            {
                case EXP_COMMENTINT:
                    return 0;
                case EXP_COMMENTSTR:
                    return "";
            }
            return new CValue(0);// (Usually) won't be used
        }
    }
}
