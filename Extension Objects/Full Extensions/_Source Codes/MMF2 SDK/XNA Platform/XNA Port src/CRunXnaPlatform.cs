// XNA Platform Object
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
    class CRunXnaPlatform : CRunExtension
    {
        const int CND_RUNNINGONPC = 0;
        const int CND_RUNNINGONXBOX = 1;
        const int CND_RUNNINGONPHONE = 2;

        public override int getNumberOfConditions()
        {
            return 3;
        }

        public override bool createRunObject(CFile file, CCreateObjectInfo cob, int version)
        {
            return true;
        }

        public override bool condition(int num, CCndExtension cnd)
        {
            switch (num)
            {
                case CND_RUNNINGONPC:
                {
					#if WINDOWS
                    return true;
                    #endif
                    return false;
                }
				case CND_RUNNINGONXBOX:
                {
					#if XBOX
                    return true;
                    #endif
                    return false;
                }
				case CND_RUNNINGONPHONE:
                {
					#if WINDOWS_PHONE
                    return true;
                    #endif
                    return false;
                }
            }
            return false;
        }

        public override void action(int num, CActExtension act)
        {
            // Return nothing.
        }

        public override CValue expression(int num)
        {
            return new CValue(0);// (Usually) won't be used
        }
    }
}