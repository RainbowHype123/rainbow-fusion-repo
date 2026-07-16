from chowdren.writers.objects import ObjectWriter

from chowdren.common import get_animation_name, to_c, make_color

from chowdren.writers.events import (StaticConditionWriter,
    StaticActionWriter, StaticExpressionWriter, make_table, EmptyAction,
    ExpressionMethodWriter)

class Behind_The_RuntimeObject(ObjectWriter):
    class_name = 'Behind_The_RuntimeObject'
    filename = 'Behind_The_Runtimeext'
    static = True
    defines = 0#['CHOWDREN_USE_Behind_The_Runtime_CACHE']

    def write_init(self, writer):
        pass

actions = make_table(StaticActionWriter, {
    0 : 'ActComment',
    1 : 'ActCommentObj'
})

conditions = make_table(StaticConditionWriter, {
    0 : 'CndComment',
    1 : 'CndCommentObj'
})

expressions = make_table(ExpressionMethodWriter, {
    0 : 'ExpCommentInt',
    1 : 'ExpCommentStr'
})

def get_object():
    return Behind_The_RuntimeObject
