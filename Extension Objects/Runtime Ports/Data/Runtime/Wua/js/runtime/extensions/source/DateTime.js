
(function (w) {
    //
    // Condition Identifiers
    //
    
    // None
    
    //
    // Action Identifiers
    //        
    
    // Local time values
    var ACT_SET_FULL_YEAR           = 0,
        ACT_SET_MONTH               = 1,
        ACT_SET_DATE                = 2,
        ACT_SET_HOURS               = 3,
        ACT_SET_MINUTES             = 4,
        ACT_SET_SECONDS             = 5,
        ACT_SET_MILLISECONDS        = 6,    
    
    // UTC time values
        ACT_SET_UTC_FULL_YEAR       = 7,
        ACT_SET_UTC_MONTH           = 8,
        ACT_SET_UTC_DATE            = 9,
        ACT_SET_UTC_HOURS           = 10,
        ACT_SET_UTC_MINUTES         = 11,
        ACT_SET_UTC_SECONDS         = 12,
        ACT_SET_UTC_MILLISECONDS    = 13,
    
    // Add time
        ACT_ADD_YEARS               = 14,
        ACT_ADD_MONTHS              = 15,
        ACT_ADD_DAYS                = 16,
        ACT_ADD_HOURS               = 17,
        ACT_ADD_MINUTES             = 18,
        ACT_ADD_SECONDS             = 19,
        ACT_ADD_MILLISECONDS        = 20,
    
    // Timestamps
        ACT_SET_TIMESTAMP_MS        = 21,
        ACT_SET_TIMESTAMP_UN        = 22,
    
    // Current date/time 
        ACT_SET_TIME_NOW            = 23,

        
    //
    // Expression Identifiers
    // 
    
    // Local time values
        EXP_GET_FULL_YEAR           = 0,
        EXP_GET_MONTH               = 1,
        EXP_GET_DATE                = 2,
        EXP_GET_DAY                 = 3,
        EXP_GET_HOURS               = 4,
        EXP_GET_MINUTES             = 5,
        EXP_GET_SECONDS             = 6,
        EXP_GET_MILLISECONDS        = 7,
    
        EXP_GET_DATE_STRING         = 8,            
        EXP_GET_TIME_STRING         = 9,
    
    // UTC time values
        EXP_GET_UTC_FULL_YEAR       = 10,
        EXP_GET_UTC_MONTH           = 11,
        EXP_GET_UTC_DATE            = 12,
        EXP_GET_UTC_DAY             = 13,        
        EXP_GET_UTC_HOURS           = 14,
        EXP_GET_UTC_MINUTES         = 15,
        EXP_GET_UTC_SECONDS         = 16,
        EXP_GET_UTC_MILLISECONDS    = 17,
    
        EXP_GET_UTC_DATE_STRING     = 18,
        EXP_GET_UTC_TIME_STRING     = 19,
    
    // Timestamps
        EXP_GET_TIMESTAMP_MS        = 20,
        EXP_GET_TIMESTAMP_UN        = 21,
    
    // TimeZone
        EXP_GET_TIMEZONE_OFFSET     = 22;
    
    CRunDateTime.prototype = //CServices.extend(new CRunExtension(),
    {
        getNumberOfConditions: getNumberOfConditions,
        createRunObject: createRunObject,
        action: action,
        condition: condition,
        expression: expression,
        
        addWeeks: addWeeks,        
        addDays: addDays,        
        addHours: addHours,        
        addMinutes: addMinutes,        
        addSeconds: addSeconds,        
        addMilliseconds: addMilliseconds
    };
    
    w.CRunDateTime = CRunDateTime;        
    
    function roundToZero(value) {
        if (value >= 0)
        {
            return Math.floor(value);
        }
        return Math.ceil(value);
    }
    
    // Date addition functions
    function addYears(years) {
        this.dateVal.setUTCFullYear(this.dateVal.getUTCFullYear() + Math.floor(years));
    }
    
    function addMonths(months) {
        var month = this.dateVal.getUTCMonth() + Math.floor(months);
        
        while( month < 0 ) {
            addYears(-1);
            month += 12;
        }
        while( month >= 12 ) {
            addYears(1);
            month -= 12;
        }
        
        this.dateVal.setUTCMonth(month);
    }
    
    function addWeeks(weeks) {
        this.addDays(Math.floor(weeks) * 7);
    }
    
    function addDays(days) {
        this.addHours(Math.floor(days) * 24);
    }
    
    function addHours(hrs) {
        this.addMinutes(Math.floor(hrs) * 60);
    }
    
    function addMinutes(mins) {
        this.addSeconds(Math.floor(mins) * 60);
    }
    
    function addSeconds(secs) {
        this.addMilliseconds(Math.floor(secs) * 1000);
    }
    
    function addMilliseconds(msecs) {
        this.dateVal.setTime(this.dateVal.getTime() + Math.floor(msecs));
    }
    
    function CRunDateTime()
    {
    }
    
    function createRunObject(file, cob, version)
    {
        this.dateVal = new Date();
        return false;
    }
    function destroyRunObject(bFlag)
    {
    }
    
    function getNumberOfConditions()
    {
        return 0;
    }
    
    //
    // Conditions
    //
    function condition(num, cnd)
    {
        return false;
    }
    
    //
    // Actions
    //
    function action(num, act)
    {
        switch (num)
        {
            case ACT_SET_FULL_YEAR:
                this.dateVal.setFullYear(roundToZero(act.getParamExpression(this.rh, 0)));
                break;
            case ACT_SET_MONTH:
                this.dateVal.setMonth(roundToZero(act.getParamExpression(this.rh, 0)));
                break;
            case ACT_SET_DATE:
                this.dateVal.setDate(roundToZero(act.getParamExpression(this.rh, 0)));
                break;
            case ACT_SET_HOURS:
                this.dateVal.setHours(roundToZero(act.getParamExpression(this.rh, 0)));
                break;
            case ACT_SET_MINUTES:
                this.dateVal.setMinutes(roundToZero(act.getParamExpression(this.rh, 0)));
                break;
            case ACT_SET_SECONDS:
                this.dateVal.setSeconds(roundToZero(act.getParamExpression(this.rh, 0)));
                break;                
            case ACT_SET_MILLISECONDS:
                this.dateVal.setMilliseconds(roundToZero(act.getParamExpression(this.rh, 0)));
                break;
            
            // UTC time values
            case ACT_SET_UTC_FULL_YEAR:
                this.dateVal.setUTCFullYear(roundToZero(act.getParamExpression(this.rh, 0)));
                break;
            case ACT_SET_UTC_MONTH:
                this.dateVal.setUTCMonth(roundToZero(act.getParamExpression(this.rh, 0)));
                break;
            case ACT_SET_UTC_DATE:
                this.dateVal.setUTCDate(roundToZero(act.getParamExpression(this.rh, 0)));
                break;
            case ACT_SET_UTC_HOURS:
                this.dateVal.setUTCHours(roundToZero(act.getParamExpression(this.rh, 0)));
                break;
            case ACT_SET_UTC_MINUTES:
                this.dateVal.setUTCMinutes(roundToZero(act.getParamExpression(this.rh, 0)));
                break;
            case ACT_SET_UTC_SECONDS:
                this.dateVal.setUTCSeconds(roundToZero(act.getParamExpression(this.rh, 0)));
                break;
            case ACT_SET_UTC_MILLISECONDS:
                this.dateVal.setUTCMilliseconds(roundToZero(act.getParamExpression(this.rh, 0)));
                break;
            
            // Add time
            case ACT_ADD_YEARS:
                this.addYears(roundToZero(act.getParamExpression(this.rh, 0)));
                break;
            case ACT_ADD_MONTHS:
                this.addMonths(roundToZero(act.getParamExpression(this.rh, 0)));
                break;
            case ACT_ADD_DAYS:
                this.addDays(roundToZero(act.getParamExpression(this.rh, 0)));
                break;
            case ACT_ADD_HOURS:
                this.addHours(roundToZero(act.getParamExpression(this.rh, 0)));
                break;
            case ACT_ADD_MINUTES:
                this.addMinutes(roundToZero(act.getParamExpression(this.rh, 0)));
                break;
            case ACT_ADD_SECONDS:
                this.addSeconds(roundToZero(act.getParamExpression(this.rh, 0)));
                break;
            case ACT_ADD_MILLISECONDS:
                this.addMilliseconds(roundToZero(act.getParamExpression(this.rh, 0)));
                break;
            
            // Set by timestamp
            case ACT_SET_TIMESTAMP_MS:
                this.dateVal.setTime(roundToZero(act.getParamExpression(this.rh, 0)));
                break;                
            case ACT_SET_TIMESTAMP_UN:
                this.dateVal.setTime(roundToZero(act.getParamExpression(this.rh, 0)) * 1000);
                break;
            
            // Set to now
            case ACT_SET_TIME_NOW:
                this.dateVal = new Date();
                break;
            
        }
    }
    
    //
    // Expressions
    // 
    function expression(num)
    {
        switch (num)
        {
            case EXP_GET_FULL_YEAR:
                return this.dateVal.getFullYear();
            case EXP_GET_MONTH:
                return this.dateVal.getMonth();
            case EXP_GET_DATE:
                return this.dateVal.getDate();
            case EXP_GET_DAY:
                return this.dateVal.getDay();
            case EXP_GET_HOURS:
                return this.dateVal.getHours();
            case EXP_GET_MINUTES:
                return this.dateVal.getMinutes();
            case EXP_GET_SECONDS:
                return this.dateVal.getSeconds();
            case EXP_GET_MILLISECONDS:
                return this.dateVal.getMilliseconds();
            case EXP_GET_DATE_STRING:
                return this.dateVal.toLocaleDateString();
            case EXP_GET_TIME_STRING:
                return this.dateVal.toLocaleTimeString();
            case EXP_GET_UTC_FULL_YEAR:
                return this.dateVal.getUTCFullYear();
            case EXP_GET_UTC_MONTH:
                return this.dateVal.getUTCMonth();
            case EXP_GET_UTC_DATE:
                return this.dateVal.getUTCDate();
            case EXP_GET_UTC_DAY:
                return this.dateVal.getUTCDay();
            case EXP_GET_UTC_HOURS:
                return this.dateVal.getUTCHours();
            case EXP_GET_UTC_MINUTES:
                return this.dateVal.getUTCMinutes();
            case EXP_GET_UTC_SECONDS:
                return this.dateVal.getUTCSeconds();
            case EXP_GET_UTC_MILLISECONDS:
                return this.dateVal.getUTCMilliseconds();
            case EXP_GET_UTC_DATE_STRING:
                return this.dateVal.toDateString();
            case EXP_GET_UTC_TIME_STRING:
                return this.dateVal.toTimeString();
            case EXP_GET_TIMESTAMP_MS:
                return this.dateVal.getTime();
            case EXP_GET_TIMESTAMP_UN:
                return Math.floor(this.dateVal.getTime() / 1000);
            case EXP_GET_TIMEZONE_OFFSET:
                return -1 * this.dateVal.getTimezoneOffset();  
        }
        return 0;
    }
}(window))

CServices.extend(CRunExtension, CRunDateTime);