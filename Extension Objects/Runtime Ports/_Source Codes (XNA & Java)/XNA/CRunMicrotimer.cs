// Microtimer Object - XNA port (All Platforms)
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

using System.Net;
using System.Net.Sockets;

using System.Diagnostics;

namespace RuntimeXNA.Extensions
{
    class CRunMicrotimer : CRunExtension
    {
        const int ACT_RESET_CUSTOM_TIMER = 0;

        const int EXP_SECONDS_APP = 0;
        const int EXP_SECONDS_FRAME = 1;
        const int EXP_MICROSECONDS_APP = 2;
        const int EXP_MICROSECONDS_FRAME = 3;
        const int EXP_SECONDS_CUSTOM = 4;
        const int EXP_MICROSECONDS_CUSTOM = 5;

        //private long appStartTime;
        private MicrotimerGlobalData globalData;
        private long frameStartTime;
        //private long customTimer;

        class MicrotimerGlobalData : CExtStorage
        {
            public long appStartTime;
            public long customTimer;
        }

        public override int getNumberOfConditions()
        {
            return 0;
        }

        public override bool createRunObject(CFile file, CCreateObjectInfo cob, int version)
        {
            CRun rhPtr = this.ho.hoAdRunHeader;
            MicrotimerGlobalData mData = null;
            CExtStorage mStorage = rhPtr.getStorage(ho.hoIdentifier);

            if (mStorage == null) // First instance of object - Initialize global data
            {
                globalData = new MicrotimerGlobalData();
                
                globalData.appStartTime = Stopwatch.GetTimestamp();
                globalData.customTimer = globalData.appStartTime;
                
                rhPtr.addStorage(globalData, ho.hoIdentifier);
            }
            else // Global data already exists - Can't be first frame, so fetch the data
            {
                globalData = (MicrotimerGlobalData)mStorage;
            }

            frameStartTime = Stopwatch.GetTimestamp();
            
            return true;
        }

        private long elapsedTicks(long timeInput)
        {
            return Stopwatch.GetTimestamp() - timeInput;
        }

        private double elapsedSeconds(long timeInput)
        {
            return elapsedTicks(timeInput) / (double)Stopwatch.Frequency;
        }

        private long elapsedMicroseconds(long timeInput)
        {
            return (long)(elapsedTicks(timeInput) * 1_000_000.0 / Stopwatch.Frequency);
        }

        public override bool condition(int num, CCndExtension cnd)
        {
            return false;
        }

        public override void action(int num, CActExtension act)
        {
            switch (num)
            {
                case ACT_RESET_CUSTOM_TIMER:
                {
                    globalData.customTimer = Stopwatch.GetTimestamp();
                    break;
                }
            }
        }

        public override CValue expression(int num)
        {
            switch (num)
            {
                case EXP_SECONDS_APP:
                {
					return new CValue(elapsedSeconds(globalData.appStartTime));
                }
                case EXP_SECONDS_FRAME:
                {
					return new CValue(elapsedSeconds(frameStartTime));
                }
                case EXP_MICROSECONDS_APP:
                {
					return new CValue(elapsedMicroseconds(globalData.appStartTime));
                }
                case EXP_MICROSECONDS_FRAME:
                {
					return new CValue(elapsedMicroseconds(frameStartTime));
                }
                case EXP_SECONDS_CUSTOM:
                {
					return new CValue(elapsedSeconds(globalData.customTimer));
                }
                case EXP_MICROSECONDS_CUSTOM:
                {
					return new CValue(elapsedMicroseconds(globalData.customTimer));
                }
            }
            return new CValue(0);
        }
    }
}