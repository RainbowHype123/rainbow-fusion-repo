# Anaconda copyright (c) 2011 Mathias Kaerlev
# See LICENSE for details.

# Based on the ZlibStream port for the Anaconda runtime, as coded by Phi

import traceback
from mmfparser.player.extensions.common import UserExtension, HiddenObject
from mmfparser.player.event.actions.common import Action
from mmfparser.player.event.conditions.common import Condition
from mmfparser.player.event.expressions.common import Expression

from sys import *   # Import sys for uncompressed file writing/reading

# Please note: Using GenerateEvent in place of PushEvent is not a good idea, being that
# access to rdPtr is blocked by instance.objectPlayer.threadsafe.acquire(). Example code:
#   instance.objectPlayer.threadsafe.acquire()
#   GenerateEvent(0)
#   instance.objectPlayer.threadsafe.release()
# If the user retrieves expressions with GenerateEvent, the ThreadSafe_End is not run
# until after they retrieve the variables. So of course the while loop in ThreadSafe_Start
# runs without stopping.
# PushEvent is slower, being called on next MMF loop, which means the expressions are accessed
# after: No "infinite-while-loop" problem.
# So here we have the caller type:

#
# Non-MMF-called Functions
#

# -- None for this ext! --


#
# Conditions
#

# ID = 0
class CndComment(Condition):
    return True

# ID = 1
class CndCommentObj(Condition):
    return True


#
# Expressions
#

# ID = 0
class ExpCommentInt(Expression):
    return 0

# ID = 1
class ExpCommentStr(Expression):
    return str("")


#
# Actions
#

# ID = 0
class ActComment(Action):
    return True

# ID = 1
class ActCommentObj(Action):
    return True


#
# Finally, Anaconda schizzle
#
class DefaultObject(HiddenObject):
    threadsafe = thread.allocate_lock() # Ensure only one thread accesses rdPtr's variables
    PercentageDifference = float(0.0)   # Percentage difference input->output
    LastOutput = ""                     # Last finished file name
    returnstring = ""                   # String to return with statistics or errors
    buffersize = 8192                   # Default size of memory buffer
    def created(self):
        return
    
class Behind_The_RuntimeObject(UserExtension):
    objectPlayer = DefaultObject

    conditions = {
        0 : CndComment,
        1 : CndCommentObj
    }

    actions = {
        0 : ActComment,
        1 : ActCommentObj
    }

    expressions = {
        0 : ExpCommentInt,
        1 : ExpCommentStr
    }

extension = Behind_The_RuntimeObject()

def get_extension():
    return extension