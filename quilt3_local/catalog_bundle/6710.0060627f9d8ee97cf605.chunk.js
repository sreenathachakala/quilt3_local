(self.webpackChunkquilt_navigator=self.webpackChunkquilt_navigator||[]).push([[6710],{86710:()=>{ace.define("ace/mode/erlang_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,n,t){"use strict";var r=e("../lib/oop"),a=e("./text_highlight_rules").TextHighlightRules,i=function(){this.$rules={start:[{include:"#module-directive"},{include:"#import-export-directive"},{include:"#behaviour-directive"},{include:"#record-directive"},{include:"#define-directive"},{include:"#macro-directive"},{include:"#directive"},{include:"#function"},{include:"#everything-else"}],"#atom":[{token:"punctuation.definition.symbol.begin.erlang",regex:"'",push:[{token:"punctuation.definition.symbol.end.erlang",regex:"'",next:"pop"},{token:["punctuation.definition.escape.erlang","constant.other.symbol.escape.erlang","punctuation.definition.escape.erlang","constant.other.symbol.escape.erlang","constant.other.symbol.escape.erlang"],regex:"(\\\\)(?:([bdefnrstv\\\\'\"])|(\\^)([@-_])|([0-7]{1,3}))"},{token:"invalid.illegal.atom.erlang",regex:"\\\\\\^?.?"},{defaultToken:"constant.other.symbol.quoted.single.erlang"}]},{token:"constant.other.symbol.unquoted.erlang",regex:"[a-z][a-zA-Z\\d@_]*"}],"#behaviour-directive":[{token:["meta.directive.behaviour.erlang","punctuation.section.directive.begin.erlang","meta.directive.behaviour.erlang","keyword.control.directive.behaviour.erlang","meta.directive.behaviour.erlang","punctuation.definition.parameters.begin.erlang","meta.directive.behaviour.erlang","entity.name.type.class.behaviour.definition.erlang","meta.directive.behaviour.erlang","punctuation.definition.parameters.end.erlang","meta.directive.behaviour.erlang","punctuation.section.directive.end.erlang"],regex:"^(\\s*)(-)(\\s*)(behaviour)(\\s*)(\\()(\\s*)([a-z][a-zA-Z\\d@_]*)(\\s*)(\\))(\\s*)(\\.)"}],"#binary":[{token:"punctuation.definition.binary.begin.erlang",regex:"<<",push:[{token:"punctuation.definition.binary.end.erlang",regex:">>",next:"pop"},{token:["punctuation.separator.binary.erlang","punctuation.separator.value-size.erlang"],regex:"(,)|(:)"},{include:"#internal-type-specifiers"},{include:"#everything-else"},{defaultToken:"meta.structure.binary.erlang"}]}],"#character":[{token:["punctuation.definition.character.erlang","punctuation.definition.escape.erlang","constant.character.escape.erlang","punctuation.definition.escape.erlang","constant.character.escape.erlang","constant.character.escape.erlang"],regex:"(\\$)(\\\\)(?:([bdefnrstv\\\\'\"])|(\\^)([@-_])|([0-7]{1,3}))"},{token:"invalid.illegal.character.erlang",regex:"\\$\\\\\\^?.?"},{token:["punctuation.definition.character.erlang","constant.character.erlang"],regex:"(\\$)(\\S)"},{token:"invalid.illegal.character.erlang",regex:"\\$.?"}],"#comment":[{token:"punctuation.definition.comment.erlang",regex:"%.*$",push_:[{token:"comment.line.percentage.erlang",regex:"$",next:"pop"},{defaultToken:"comment.line.percentage.erlang"}]}],"#define-directive":[{token:["meta.directive.define.erlang","punctuation.section.directive.begin.erlang","meta.directive.define.erlang","keyword.control.directive.define.erlang","meta.directive.define.erlang","punctuation.definition.parameters.begin.erlang","meta.directive.define.erlang","entity.name.function.macro.definition.erlang","meta.directive.define.erlang","punctuation.separator.parameters.erlang"],regex:"^(\\s*)(-)(\\s*)(define)(\\s*)(\\()(\\s*)([a-zA-Z\\d@_]+)(\\s*)(,)",push:[{token:["punctuation.definition.parameters.end.erlang","meta.directive.define.erlang","punctuation.section.directive.end.erlang"],regex:"(\\))(\\s*)(\\.)",next:"pop"},{include:"#everything-else"},{defaultToken:"meta.directive.define.erlang"}]},{token:"meta.directive.define.erlang",regex:"(?=^\\s*-\\s*define\\s*\\(\\s*[a-zA-Z\\d@_]+\\s*\\()",push:[{token:["punctuation.definition.parameters.end.erlang","meta.directive.define.erlang","punctuation.section.directive.end.erlang"],regex:"(\\))(\\s*)(\\.)",next:"pop"},{token:["text","punctuation.section.directive.begin.erlang","text","keyword.control.directive.define.erlang","text","punctuation.definition.parameters.begin.erlang","text","entity.name.function.macro.definition.erlang","text","punctuation.definition.parameters.begin.erlang"],regex:"^(\\s*)(-)(\\s*)(define)(\\s*)(\\()(\\s*)([a-zA-Z\\d@_]+)(\\s*)(\\()",push:[{token:["punctuation.definition.parameters.end.erlang","text","punctuation.separator.parameters.erlang"],regex:"(\\))(\\s*)(,)",next:"pop"},{token:"punctuation.separator.parameters.erlang",regex:","},{include:"#everything-else"}]},{token:"punctuation.separator.define.erlang",regex:"\\|\\||\\||:|;|,|\\.|->"},{include:"#everything-else"},{defaultToken:"meta.directive.define.erlang"}]}],"#directive":[{token:["meta.directive.erlang","punctuation.section.directive.begin.erlang","meta.directive.erlang","keyword.control.directive.erlang","meta.directive.erlang","punctuation.definition.parameters.begin.erlang"],regex:"^(\\s*)(-)(\\s*)([a-z][a-zA-Z\\d@_]*)(\\s*)(\\(?)",push:[{token:["punctuation.definition.parameters.end.erlang","meta.directive.erlang","punctuation.section.directive.end.erlang"],regex:"(\\)?)(\\s*)(\\.)",next:"pop"},{include:"#everything-else"},{defaultToken:"meta.directive.erlang"}]},{token:["meta.directive.erlang","punctuation.section.directive.begin.erlang","meta.directive.erlang","keyword.control.directive.erlang","meta.directive.erlang","punctuation.section.directive.end.erlang"],regex:"^(\\s*)(-)(\\s*)([a-z][a-zA-Z\\d@_]*)(\\s*)(\\.)"}],"#everything-else":[{include:"#comment"},{include:"#record-usage"},{include:"#macro-usage"},{include:"#expression"},{include:"#keyword"},{include:"#textual-operator"},{include:"#function-call"},{include:"#tuple"},{include:"#list"},{include:"#binary"},{include:"#parenthesized-expression"},{include:"#character"},{include:"#number"},{include:"#atom"},{include:"#string"},{include:"#symbolic-operator"},{include:"#variable"}],"#expression":[{token:"keyword.control.if.erlang",regex:"\\bif\\b",push:[{token:"keyword.control.end.erlang",regex:"\\bend\\b",next:"pop"},{include:"#internal-expression-punctuation"},{include:"#everything-else"},{defaultToken:"meta.expression.if.erlang"}]},{token:"keyword.control.case.erlang",regex:"\\bcase\\b",push:[{token:"keyword.control.end.erlang",regex:"\\bend\\b",next:"pop"},{include:"#internal-expression-punctuation"},{include:"#everything-else"},{defaultToken:"meta.expression.case.erlang"}]},{token:"keyword.control.receive.erlang",regex:"\\breceive\\b",push:[{token:"keyword.control.end.erlang",regex:"\\bend\\b",next:"pop"},{include:"#internal-expression-punctuation"},{include:"#everything-else"},{defaultToken:"meta.expression.receive.erlang"}]},{token:["keyword.control.fun.erlang","text","entity.name.type.class.module.erlang","text","punctuation.separator.module-function.erlang","text","entity.name.function.erlang","text","punctuation.separator.function-arity.erlang"],regex:"\\b(fun)(\\s*)(?:([a-z][a-zA-Z\\d@_]*)(\\s*)(:)(\\s*))?([a-z][a-zA-Z\\d@_]*)(\\s*)(/)"},{token:"keyword.control.fun.erlang",regex:"\\bfun\\b",push:[{token:"keyword.control.end.erlang",regex:"\\bend\\b",next:"pop"},{token:"text",regex:"(?=\\()",push:[{token:"punctuation.separator.clauses.erlang",regex:";|(?=\\bend\\b)",next:"pop"},{include:"#internal-function-parts"}]},{include:"#everything-else"},{defaultToken:"meta.expression.fun.erlang"}]},{token:"keyword.control.try.erlang",regex:"\\btry\\b",push:[{token:"keyword.control.end.erlang",regex:"\\bend\\b",next:"pop"},{include:"#internal-expression-punctuation"},{include:"#everything-else"},{defaultToken:"meta.expression.try.erlang"}]},{token:"keyword.control.begin.erlang",regex:"\\bbegin\\b",push:[{token:"keyword.control.end.erlang",regex:"\\bend\\b",next:"pop"},{include:"#internal-expression-punctuation"},{include:"#everything-else"},{defaultToken:"meta.expression.begin.erlang"}]},{token:"keyword.control.query.erlang",regex:"\\bquery\\b",push:[{token:"keyword.control.end.erlang",regex:"\\bend\\b",next:"pop"},{include:"#everything-else"},{defaultToken:"meta.expression.query.erlang"}]}],"#function":[{token:["meta.function.erlang","entity.name.function.definition.erlang","meta.function.erlang"],regex:"^(\\s*)([a-z][a-zA-Z\\d@_]*|'[^']*')(\\s*)(?=\\()",push:[{token:"punctuation.terminator.function.erlang",regex:"\\.",next:"pop"},{token:["text","entity.name.function.erlang","text"],regex:"^(\\s*)([a-z][a-zA-Z\\d@_]*|'[^']*')(\\s*)(?=\\()"},{token:"text",regex:"(?=\\()",push:[{token:"punctuation.separator.clauses.erlang",regex:";|(?=\\.)",next:"pop"},{include:"#parenthesized-expression"},{include:"#internal-function-parts"}]},{include:"#everything-else"},{defaultToken:"meta.function.erlang"}]}],"#function-call":[{token:"meta.function-call.erlang",regex:"(?=(?:[a-z][a-zA-Z\\d@_]*|'[^']*')\\s*(?:\\(|:\\s*(?:[a-z][a-zA-Z\\d@_]*|'[^']*')\\s*\\())",push:[{token:"punctuation.definition.parameters.end.erlang",regex:"\\)",next:"pop"},{token:["entity.name.type.class.module.erlang","text","punctuation.separator.module-function.erlang","text","entity.name.function.guard.erlang","text","punctuation.definition.parameters.begin.erlang"],regex:"(?:(erlang)(\\s*)(:)(\\s*))?(is_atom|is_binary|is_constant|is_float|is_function|is_integer|is_list|is_number|is_pid|is_port|is_reference|is_tuple|is_record|abs|element|hd|length|node|round|self|size|tl|trunc)(\\s*)(\\()",push:[{token:"text",regex:"(?=\\))",next:"pop"},{token:"punctuation.separator.parameters.erlang",regex:","},{include:"#everything-else"}]},{token:["entity.name.type.class.module.erlang","text","punctuation.separator.module-function.erlang","text","entity.name.function.erlang","text","punctuation.definition.parameters.begin.erlang"],regex:"(?:([a-z][a-zA-Z\\d@_]*|'[^']*')(\\s*)(:)(\\s*))?([a-z][a-zA-Z\\d@_]*|'[^']*')(\\s*)(\\()",push:[{token:"text",regex:"(?=\\))",next:"pop"},{token:"punctuation.separator.parameters.erlang",regex:","},{include:"#everything-else"}]},{defaultToken:"meta.function-call.erlang"}]}],"#import-export-directive":[{token:["meta.directive.import.erlang","punctuation.section.directive.begin.erlang","meta.directive.import.erlang","keyword.control.directive.import.erlang","meta.directive.import.erlang","punctuation.definition.parameters.begin.erlang","meta.directive.import.erlang","entity.name.type.class.module.erlang","meta.directive.import.erlang","punctuation.separator.parameters.erlang"],regex:"^(\\s*)(-)(\\s*)(import)(\\s*)(\\()(\\s*)([a-z][a-zA-Z\\d@_]*|'[^']*')(\\s*)(,)",push:[{token:["punctuation.definition.parameters.end.erlang","meta.directive.import.erlang","punctuation.section.directive.end.erlang"],regex:"(\\))(\\s*)(\\.)",next:"pop"},{include:"#internal-function-list"},{defaultToken:"meta.directive.import.erlang"}]},{token:["meta.directive.export.erlang","punctuation.section.directive.begin.erlang","meta.directive.export.erlang","keyword.control.directive.export.erlang","meta.directive.export.erlang","punctuation.definition.parameters.begin.erlang"],regex:"^(\\s*)(-)(\\s*)(export)(\\s*)(\\()",push:[{token:["punctuation.definition.parameters.end.erlang","meta.directive.export.erlang","punctuation.section.directive.end.erlang"],regex:"(\\))(\\s*)(\\.)",next:"pop"},{include:"#internal-function-list"},{defaultToken:"meta.directive.export.erlang"}]}],"#internal-expression-punctuation":[{token:["punctuation.separator.clause-head-body.erlang","punctuation.separator.clauses.erlang","punctuation.separator.expressions.erlang"],regex:"(->)|(;)|(,)"}],"#internal-function-list":[{token:"punctuation.definition.list.begin.erlang",regex:"\\[",push:[{token:"punctuation.definition.list.end.erlang",regex:"\\]",next:"pop"},{token:["entity.name.function.erlang","text","punctuation.separator.function-arity.erlang"],regex:"([a-z][a-zA-Z\\d@_]*|'[^']*')(\\s*)(/)",push:[{token:"punctuation.separator.list.erlang",regex:",|(?=\\])",next:"pop"},{include:"#everything-else"}]},{include:"#everything-else"},{defaultToken:"meta.structure.list.function.erlang"}]}],"#internal-function-parts":[{token:"text",regex:"(?=\\()",push:[{token:"punctuation.separator.clause-head-body.erlang",regex:"->",next:"pop"},{token:"punctuation.definition.parameters.begin.erlang",regex:"\\(",push:[{token:"punctuation.definition.parameters.end.erlang",regex:"\\)",next:"pop"},{token:"punctuation.separator.parameters.erlang",regex:","},{include:"#everything-else"}]},{token:"punctuation.separator.guards.erlang",regex:",|;"},{include:"#everything-else"}]},{token:"punctuation.separator.expressions.erlang",regex:","},{include:"#everything-else"}],"#internal-record-body":[{token:"punctuation.definition.class.record.begin.erlang",regex:"\\{",push:[{token:"meta.structure.record.erlang",regex:"(?=\\})",next:"pop"},{token:["variable.other.field.erlang","variable.language.omitted.field.erlang","text","keyword.operator.assignment.erlang"],regex:"(?:([a-z][a-zA-Z\\d@_]*|'[^']*')|(_))(\\s*)(=|::)",push:[{token:"punctuation.separator.class.record.erlang",regex:",|(?=\\})",next:"pop"},{include:"#everything-else"}]},{token:["variable.other.field.erlang","text","punctuation.separator.class.record.erlang"],regex:"([a-z][a-zA-Z\\d@_]*|'[^']*')(\\s*)((?:,)?)"},{include:"#everything-else"},{defaultToken:"meta.structure.record.erlang"}]}],"#internal-type-specifiers":[{token:"punctuation.separator.value-type.erlang",regex:"/",push:[{token:"text",regex:"(?=,|:|>>)",next:"pop"},{token:["storage.type.erlang","storage.modifier.signedness.erlang","storage.modifier.endianness.erlang","storage.modifier.unit.erlang","punctuation.separator.type-specifiers.erlang"],regex:"(integer|float|binary|bytes|bitstring|bits)|(signed|unsigned)|(big|little|native)|(unit)|(-)"}]}],"#keyword":[{token:"keyword.control.erlang",regex:"\\b(?:after|begin|case|catch|cond|end|fun|if|let|of|query|try|receive|when)\\b"}],"#list":[{token:"punctuation.definition.list.begin.erlang",regex:"\\[",push:[{token:"punctuation.definition.list.end.erlang",regex:"\\]",next:"pop"},{token:"punctuation.separator.list.erlang",regex:"\\||\\|\\||,"},{include:"#everything-else"},{defaultToken:"meta.structure.list.erlang"}]}],"#macro-directive":[{token:["meta.directive.ifdef.erlang","punctuation.section.directive.begin.erlang","meta.directive.ifdef.erlang","keyword.control.directive.ifdef.erlang","meta.directive.ifdef.erlang","punctuation.definition.parameters.begin.erlang","meta.directive.ifdef.erlang","entity.name.function.macro.erlang","meta.directive.ifdef.erlang","punctuation.definition.parameters.end.erlang","meta.directive.ifdef.erlang","punctuation.section.directive.end.erlang"],regex:"^(\\s*)(-)(\\s*)(ifdef)(\\s*)(\\()(\\s*)([a-zA-Z\\d@_]+)(\\s*)(\\))(\\s*)(\\.)"},{token:["meta.directive.ifndef.erlang","punctuation.section.directive.begin.erlang","meta.directive.ifndef.erlang","keyword.control.directive.ifndef.erlang","meta.directive.ifndef.erlang","punctuation.definition.parameters.begin.erlang","meta.directive.ifndef.erlang","entity.name.function.macro.erlang","meta.directive.ifndef.erlang","punctuation.definition.parameters.end.erlang","meta.directive.ifndef.erlang","punctuation.section.directive.end.erlang"],regex:"^(\\s*)(-)(\\s*)(ifndef)(\\s*)(\\()(\\s*)([a-zA-Z\\d@_]+)(\\s*)(\\))(\\s*)(\\.)"},{token:["meta.directive.undef.erlang","punctuation.section.directive.begin.erlang","meta.directive.undef.erlang","keyword.control.directive.undef.erlang","meta.directive.undef.erlang","punctuation.definition.parameters.begin.erlang","meta.directive.undef.erlang","entity.name.function.macro.erlang","meta.directive.undef.erlang","punctuation.definition.parameters.end.erlang","meta.directive.undef.erlang","punctuation.section.directive.end.erlang"],regex:"^(\\s*)(-)(\\s*)(undef)(\\s*)(\\()(\\s*)([a-zA-Z\\d@_]+)(\\s*)(\\))(\\s*)(\\.)"}],"#macro-usage":[{token:["keyword.operator.macro.erlang","meta.macro-usage.erlang","entity.name.function.macro.erlang"],regex:"(\\?\\??)(\\s*)([a-zA-Z\\d@_]+)"}],"#module-directive":[{token:["meta.directive.module.erlang","punctuation.section.directive.begin.erlang","meta.directive.module.erlang","keyword.control.directive.module.erlang","meta.directive.module.erlang","punctuation.definition.parameters.begin.erlang","meta.directive.module.erlang","entity.name.type.class.module.definition.erlang","meta.directive.module.erlang","punctuation.definition.parameters.end.erlang","meta.directive.module.erlang","punctuation.section.directive.end.erlang"],regex:"^(\\s*)(-)(\\s*)(module)(\\s*)(\\()(\\s*)([a-z][a-zA-Z\\d@_]*)(\\s*)(\\))(\\s*)(\\.)"}],"#number":[{token:"text",regex:"(?=\\d)",push:[{token:"text",regex:"(?!\\d)",next:"pop"},{token:["constant.numeric.float.erlang","punctuation.separator.integer-float.erlang","constant.numeric.float.erlang","punctuation.separator.float-exponent.erlang"],regex:"(\\d+)(\\.)(\\d+)((?:[eE][\\+\\-]?\\d+)?)"},{token:["constant.numeric.integer.binary.erlang","punctuation.separator.base-integer.erlang","constant.numeric.integer.binary.erlang"],regex:"(2)(#)([0-1]+)"},{token:["constant.numeric.integer.base-3.erlang","punctuation.separator.base-integer.erlang","constant.numeric.integer.base-3.erlang"],regex:"(3)(#)([0-2]+)"},{token:["constant.numeric.integer.base-4.erlang","punctuation.separator.base-integer.erlang","constant.numeric.integer.base-4.erlang"],regex:"(4)(#)([0-3]+)"},{token:["constant.numeric.integer.base-5.erlang","punctuation.separator.base-integer.erlang","constant.numeric.integer.base-5.erlang"],regex:"(5)(#)([0-4]+)"},{token:["constant.numeric.integer.base-6.erlang","punctuation.separator.base-integer.erlang","constant.numeric.integer.base-6.erlang"],regex:"(6)(#)([0-5]+)"},{token:["constant.numeric.integer.base-7.erlang","punctuation.separator.base-integer.erlang","constant.numeric.integer.base-7.erlang"],regex:"(7)(#)([0-6]+)"},{token:["constant.numeric.integer.octal.erlang","punctuation.separator.base-integer.erlang","constant.numeric.integer.octal.erlang"],regex:"(8)(#)([0-7]+)"},{token:["constant.numeric.integer.base-9.erlang","punctuation.separator.base-integer.erlang","constant.numeric.integer.base-9.erlang"],regex:"(9)(#)([0-8]+)"},{token:["constant.numeric.integer.decimal.erlang","punctuation.separator.base-integer.erlang","constant.numeric.integer.decimal.erlang"],regex:"(10)(#)(\\d+)"},{token:["constant.numeric.integer.base-11.erlang","punctuation.separator.base-integer.erlang","constant.numeric.integer.base-11.erlang"],regex:"(11)(#)([\\daA]+)"},{token:["constant.numeric.integer.base-12.erlang","punctuation.separator.base-integer.erlang","constant.numeric.integer.base-12.erlang"],regex:"(12)(#)([\\da-bA-B]+)"},{token:["constant.numeric.integer.base-13.erlang","punctuation.separator.base-integer.erlang","constant.numeric.integer.base-13.erlang"],regex:"(13)(#)([\\da-cA-C]+)"},{token:["constant.numeric.integer.base-14.erlang","punctuation.separator.base-integer.erlang","constant.numeric.integer.base-14.erlang"],regex:"(14)(#)([\\da-dA-D]+)"},{token:["constant.numeric.integer.base-15.erlang","punctuation.separator.base-integer.erlang","constant.numeric.integer.base-15.erlang"],regex:"(15)(#)([\\da-eA-E]+)"},{token:["constant.numeric.integer.hexadecimal.erlang","punctuation.separator.base-integer.erlang","constant.numeric.integer.hexadecimal.erlang"],regex:"(16)(#)([\\da-fA-F]+)"},{token:["constant.numeric.integer.base-17.erlang","punctuation.separator.base-integer.erlang","constant.numeric.integer.base-17.erlang"],regex:"(17)(#)([\\da-gA-G]+)"},{token:["constant.numeric.integer.base-18.erlang","punctuation.separator.base-integer.erlang","constant.numeric.integer.base-18.erlang"],regex:"(18)(#)([\\da-hA-H]+)"},{token:["constant.numeric.integer.base-19.erlang","punctuation.separator.base-integer.erlang","constant.numeric.integer.base-19.erlang"],regex:"(19)(#)([\\da-iA-I]+)"},{token:["constant.numeric.integer.base-20.erlang","punctuation.separator.base-integer.erlang","constant.numeric.integer.base-20.erlang"],regex:"(20)(#)([\\da-jA-J]+)"},{token:["constant.numeric.integer.base-21.erlang","punctuation.separator.base-integer.erlang","constant.numeric.integer.base-21.erlang"],regex:"(21)(#)([\\da-kA-K]+)"},{token:["constant.numeric.integer.base-22.erlang","punctuation.separator.base-integer.erlang","constant.numeric.integer.base-22.erlang"],regex:"(22)(#)([\\da-lA-L]+)"},{token:["constant.numeric.integer.base-23.erlang","punctuation.separator.base-integer.erlang","constant.numeric.integer.base-23.erlang"],regex:"(23)(#)([\\da-mA-M]+)"},{token:["constant.numeric.integer.base-24.erlang","punctuation.separator.base-integer.erlang","constant.numeric.integer.base-24.erlang"],regex:"(24)(#)([\\da-nA-N]+)"},{token:["constant.numeric.integer.base-25.erlang","punctuation.separator.base-integer.erlang","constant.numeric.integer.base-25.erlang"],regex:"(25)(#)([\\da-oA-O]+)"},{token:["constant.numeric.integer.base-26.erlang","punctuation.separator.base-integer.erlang","constant.numeric.integer.base-26.erlang"],regex:"(26)(#)([\\da-pA-P]+)"},{token:["constant.numeric.integer.base-27.erlang","punctuation.separator.base-integer.erlang","constant.numeric.integer.base-27.erlang"],regex:"(27)(#)([\\da-qA-Q]+)"},{token:["constant.numeric.integer.base-28.erlang","punctuation.separator.base-integer.erlang","constant.numeric.integer.base-28.erlang"],regex:"(28)(#)([\\da-rA-R]+)"},{token:["constant.numeric.integer.base-29.erlang","punctuation.separator.base-integer.erlang","constant.numeric.integer.base-29.erlang"],regex:"(29)(#)([\\da-sA-S]+)"},{token:["constant.numeric.integer.base-30.erlang","punctuation.separator.base-integer.erlang","constant.numeric.integer.base-30.erlang"],regex:"(30)(#)([\\da-tA-T]+)"},{token:["constant.numeric.integer.base-31.erlang","punctuation.separator.base-integer.erlang","constant.numeric.integer.base-31.erlang"],regex:"(31)(#)([\\da-uA-U]+)"},{token:["constant.numeric.integer.base-32.erlang","punctuation.separator.base-integer.erlang","constant.numeric.integer.base-32.erlang"],regex:"(32)(#)([\\da-vA-V]+)"},{token:["constant.numeric.integer.base-33.erlang","punctuation.separator.base-integer.erlang","constant.numeric.integer.base-33.erlang"],regex:"(33)(#)([\\da-wA-W]+)"},{token:["constant.numeric.integer.base-34.erlang","punctuation.separator.base-integer.erlang","constant.numeric.integer.base-34.erlang"],regex:"(34)(#)([\\da-xA-X]+)"},{token:["constant.numeric.integer.base-35.erlang","punctuation.separator.base-integer.erlang","constant.numeric.integer.base-35.erlang"],regex:"(35)(#)([\\da-yA-Y]+)"},{token:["constant.numeric.integer.base-36.erlang","punctuation.separator.base-integer.erlang","constant.numeric.integer.base-36.erlang"],regex:"(36)(#)([\\da-zA-Z]+)"},{token:"invalid.illegal.integer.erlang",regex:"\\d+#[\\da-zA-Z]+"},{token:"constant.numeric.integer.decimal.erlang",regex:"\\d+"}]}],"#parenthesized-expression":[{token:"punctuation.section.expression.begin.erlang",regex:"\\(",push:[{token:"punctuation.section.expression.end.erlang",regex:"\\)",next:"pop"},{include:"#everything-else"},{defaultToken:"meta.expression.parenthesized"}]}],"#record-directive":[{token:["meta.directive.record.erlang","punctuation.section.directive.begin.erlang","meta.directive.record.erlang","keyword.control.directive.import.erlang","meta.directive.record.erlang","punctuation.definition.parameters.begin.erlang","meta.directive.record.erlang","entity.name.type.class.record.definition.erlang","meta.directive.record.erlang","punctuation.separator.parameters.erlang"],regex:"^(\\s*)(-)(\\s*)(record)(\\s*)(\\()(\\s*)([a-z][a-zA-Z\\d@_]*|'[^']*')(\\s*)(,)",push:[{token:["punctuation.definition.class.record.end.erlang","meta.directive.record.erlang","punctuation.definition.parameters.end.erlang","meta.directive.record.erlang","punctuation.section.directive.end.erlang"],regex:"(\\})(\\s*)(\\))(\\s*)(\\.)",next:"pop"},{include:"#internal-record-body"},{defaultToken:"meta.directive.record.erlang"}]}],"#record-usage":[{token:["keyword.operator.record.erlang","meta.record-usage.erlang","entity.name.type.class.record.erlang","meta.record-usage.erlang","punctuation.separator.record-field.erlang","meta.record-usage.erlang","variable.other.field.erlang"],regex:"(#)(\\s*)([a-z][a-zA-Z\\d@_]*|'[^']*')(\\s*)(\\.)(\\s*)([a-z][a-zA-Z\\d@_]*|'[^']*')"},{token:["keyword.operator.record.erlang","meta.record-usage.erlang","entity.name.type.class.record.erlang"],regex:"(#)(\\s*)([a-z][a-zA-Z\\d@_]*|'[^']*')",push:[{token:"punctuation.definition.class.record.end.erlang",regex:"\\}",next:"pop"},{include:"#internal-record-body"},{defaultToken:"meta.record-usage.erlang"}]}],"#string":[{token:"punctuation.definition.string.begin.erlang",regex:'"',push:[{token:"punctuation.definition.string.end.erlang",regex:'"',next:"pop"},{token:["punctuation.definition.escape.erlang","constant.character.escape.erlang","punctuation.definition.escape.erlang","constant.character.escape.erlang","constant.character.escape.erlang"],regex:"(\\\\)(?:([bdefnrstv\\\\'\"])|(\\^)([@-_])|([0-7]{1,3}))"},{token:"invalid.illegal.string.erlang",regex:"\\\\\\^?.?"},{token:["punctuation.definition.placeholder.erlang","punctuation.separator.placeholder-parts.erlang","constant.other.placeholder.erlang","punctuation.separator.placeholder-parts.erlang","punctuation.separator.placeholder-parts.erlang","constant.other.placeholder.erlang","punctuation.separator.placeholder-parts.erlang","punctuation.separator.placeholder-parts.erlang","punctuation.separator.placeholder-parts.erlang","constant.other.placeholder.erlang","constant.other.placeholder.erlang"],regex:"(~)(?:((?:\\-)?)(\\d+)|(\\*))?(?:(\\.)(?:(\\d+)|(\\*)))?(?:(\\.)(?:(\\*)|(.)))?([~cfegswpWPBX#bx\\+ni])"},{token:["punctuation.definition.placeholder.erlang","punctuation.separator.placeholder-parts.erlang","constant.other.placeholder.erlang","constant.other.placeholder.erlang"],regex:"(~)((?:\\*)?)((?:\\d+)?)([~du\\-#fsacl])"},{token:"invalid.illegal.string.erlang",regex:"~.?"},{defaultToken:"string.quoted.double.erlang"}]}],"#symbolic-operator":[{token:"keyword.operator.symbolic.erlang",regex:"\\+\\+|\\+|--|-|\\*|/=|/|=/=|=:=|==|=<|=|<-|<|>=|>|!|::"}],"#textual-operator":[{token:"keyword.operator.textual.erlang",regex:"\\b(?:andalso|band|and|bxor|xor|bor|orelse|or|bnot|not|bsl|bsr|div|rem)\\b"}],"#tuple":[{token:"punctuation.definition.tuple.begin.erlang",regex:"\\{",push:[{token:"punctuation.definition.tuple.end.erlang",regex:"\\}",next:"pop"},{token:"punctuation.separator.tuple.erlang",regex:","},{include:"#everything-else"},{defaultToken:"meta.structure.tuple.erlang"}]}],"#variable":[{token:["variable.other.erlang","variable.language.omitted.erlang"],regex:"(_[a-zA-Z\\d@_]+|[A-Z][a-zA-Z\\d@_]*)|(_)"}]},this.normalizeRules()};i.metaData={comment:"The recognition of function definitions and compiler directives (such as module, record and macro definitions) acequires that each of the aforementioned constructs must be the first string inside a line (except for whitespace).  Also, the function/module/record/macro names must be given unquoted.  -- desp",fileTypes:["erl","hrl"],keyEquivalent:"^~E",name:"Erlang",scopeName:"source.erlang"},r.inherits(i,a),n.ErlangHighlightRules=i})),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],(function(e,n,t){"use strict";var r=e("../../lib/oop"),a=e("../../range").Range,i=e("./fold_mode").FoldMode,o=n.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};r.inherits(o,i),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,n,t){var r=e.getLine(t);if(this.singleLineBlockCommentRe.test(r)&&!this.startRegionRe.test(r)&&!this.tripleStarBlockCommentRe.test(r))return"";var a=this._getFoldWidgetBase(e,n,t);return!a&&this.startRegionRe.test(r)?"start":a},this.getFoldWidgetRange=function(e,n,t,r){var a,i=e.getLine(t);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(e,i,t);if(a=i.match(this.foldingStartMarker)){var o=a.index;if(a[1])return this.openingBracketBlock(e,a[1],t,o);var g=e.getCommentFoldRange(t,o+a[0].length,1);return g&&!g.isMultiLine()&&(r?g=this.getSectionRange(e,t):"all"!=n&&(g=null)),g}if("markbegin"!==n&&(a=i.match(this.foldingStopMarker))){o=a.index+a[0].length;return a[1]?this.closingBracketBlock(e,a[1],t,o):e.getCommentFoldRange(t,o,-1)}},this.getSectionRange=function(e,n){for(var t=e.getLine(n),r=t.search(/\S/),i=n,o=t.length,g=n+=1,l=e.getLength();++n<l;){var c=(t=e.getLine(n)).search(/\S/);if(-1!==c){if(r>c)break;var s=this.getFoldWidgetRange(e,"all",n);if(s){if(s.start.row<=i)break;if(s.isMultiLine())n=s.end.row;else if(r==c)break}g=n}}return new a(i,o,g,e.getLine(g).length)},this.getCommentRegionBlock=function(e,n,t){for(var r=n.search(/\s*$/),i=e.getLength(),o=t,g=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,l=1;++t<i;){n=e.getLine(t);var c=g.exec(n);if(c&&(c[1]?l--:l++,!l))break}if(t>o)return new a(o,r,t,n.length)}}.call(o.prototype)})),ace.define("ace/mode/erlang",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/erlang_highlight_rules","ace/mode/folding/cstyle"],(function(e,n,t){"use strict";var r=e("../lib/oop"),a=e("./text").Mode,i=e("./erlang_highlight_rules").ErlangHighlightRules,o=e("./folding/cstyle").FoldMode,g=function(){this.HighlightRules=i,this.foldingRules=new o,this.$behaviour=this.$defaultBehaviour};r.inherits(g,a),function(){this.lineCommentStart="%",this.blockComment=null,this.$id="ace/mode/erlang"}.call(g.prototype),n.Mode=g}))}}]);
//# sourceMappingURL=6710.0060627f9d8ee97cf605.chunk.js.map