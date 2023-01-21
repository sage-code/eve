function apply_style(str) {
    //keywords without indentation
    str = str.replace(/^driver\b/,keyword("driver"))
    str = str.replace(/^module\b/,keyword("module"))
    str = str.replace(/^aspect\b/,keyword("aspect"))
    str = str.replace(/^global\b/,keyword("global"))
    str = str.replace(/^define\b/,keyword("define"))
    str = str.replace(/^import\b/,keyword("import"))
    str = str.replace(/^alias\b/,keyword("alias"))
    str = str.replace(/^return\b/,keyword("return"))
    str = str.replace(/^function\b/,keyword("function"))
    str = str.replace(/^routine\b/,keyword("routine"))
    str = str.replace(/^class\b/,keyword("class"))
    str = str.replace(/^create\b/,keyword("create"))
    str = str.replace(/^remove\b/,keyword("remove"))
    str = str.replace(/^static\b/,keyword("static"))
    // process keywords
    str = str.replace(/^case\b/,keyword("case"))
    str = str.replace(/^recover\b/,keyword("recover"))
    str = str.replace(/^release\b/,keyword("release"))
    str = str.replace(/^finalize\b/,keyword("finalize"))
    // overwrite exceptions
    str = str.replace(/\bprocess\b/,keyword("process"))
    str = str.replace(/\breturn\b/,keyword("return"))

    // creat control flow
    str = str.replace(/\bcycle\b/,control("cycle"))
    str = str.replace(/\brepeat\b/,control("repeat"))    
    str = str.replace(/\bwhen\b/,control("when"))
    str = str.replace(/\bjob\b/,control("job"))
    str = str.replace(/\bother\b/,control("other"))
    str = str.replace(/\bloop\b/,control("loop"))
    str = str.replace(/\bwhile\b/,control("while"))
    str = str.replace(/\bfor\b/,control("for"))
    str = str.replace(/\btask\b/,control("task"))
    str = str.replace(/\btry\b/,control("try"))
    str = str.replace(/\bmiss\b/,control("miss"))
    str = str.replace(/\bmatch\b/,control("match"))
    str = str.replace(/\ball\b/g,control("all"))
    str = str.replace(/\bone\b/g,control("one"))
    str = str.replace(/\bupdate\b/,control("update"))
    str = str.replace(/\bif\b/g,control("if"))
    str = str.replace(/\bthen\b/,control("then"))
    str = str.replace(/\belse\b/g,control("else"))
    str = str.replace(/\bdone\b/g,control("done"))

    //colorize data types keywords
    str = str.replace(/\bInteger\b/g,types("Integer"))
    str = str.replace(/\bNatural\b/g,types("Natural"))
    str = str.replace(/\bDouble\b/g,types("Double"))
    str = str.replace(/\bString\b/g,types("String"))
    str = str.replace(/\bLogic\b/g,types("Logic"))
    str = str.replace(/\bTable\b/g,types("Table"))
    str = str.replace(/\bRecord\b/g,types("Record"))
    str = str.replace(/\bOrdinal\b/g,types("Ordinal"))
    str = str.replace(/\bVariant\b/g,types("Variant"))
    str = str.replace(/\bDate\b/g,types("Date"))
    str = str.replace(/\bTime\b/g,types("Time"))
    str = str.replace(/\bVector\b/g,types("Vector"))
    str = str.replace(/\bList\b/g,types("List"))
    str = str.replace(/\bSymbol\b/g,types("Symbol"))
    str = str.replace(/\bObject\b/g,types("Object"))
    str = str.replace(/\bSet\b/g,types("Set"))
    str = str.replace(/\bMap\b/g,types("Map"))
    str = str.replace(/\bText\b/g,types("Text"))
    str = str.replace(/\bNull\b/g,types("Null"))
    str = str.replace(/\bTrue\b/g,types("True"))
    str = str.replace(/\bFalse\b/g,types("False"))
    str = str.replace(/\bType\b/g,types("Type"))
    str = str.replace(/\bTypeName\b/g,types("TypeName"))

    // System & built-in variables
    str = str.replace(/\bself\b/g,builtin("self"))
    str = str.replace(/\bsuper\b/g,builtin("super"))  
      
    // interruption statements
    str = str.replace(/\bexpect\b/,interrupt("expect"))
    str = str.replace(/\bbreak\b/,interrupt("break"))
    str = str.replace(/\bnext\b/,interrupt("next"))
    str = str.replace(/\balter\b/,interrupt("alter"))
    str = str.replace(/\bmake\b/,interrupt("make"))
    str = str.replace(/\bstore\b/,interrupt("store"))
    str = str.replace(/\bcreate\b/,interrupt("create"))
    str = str.replace(/\binsert\b/,interrupt("insert"))
    str = str.replace(/\bcommit\b/,interrupt("commit"))
    str = str.replace(/\breset\b/,interrupt("reset"))
    str = str.replace(/\bbegin\b/,interrupt("begin"))
    str = str.replace(/\bapply\b/,interrupt("apply"))
    str = str.replace(/\bwait\b/,interrupt("wait"))
    str = str.replace(/\bexit\b/,interrupt("exit"))
    str = str.replace(/\babort\b/,interrupt("abort"))
    str = str.replace(/\bprint\b/,interrupt("print"))
    str = str.replace(/\bwrite\b/,interrupt("write"))
    str = str.replace(/\bread\b/,interrupt("read"))
    str = str.replace(/\bover\b/,interrupt("over"))
    str = str.replace(/\bpass\b/,interrupt("pass"))
    str = str.replace(/\bskip\b/,interrupt("skip"))
    str = str.replace(/\bfail\b/,interrupt("fail"))
    str = str.replace(/\braise\b/,interrupt("raise"))
    str = str.replace(/\bretry\b/,interrupt("retry"))
    //operators   
    str = str.replace(/\bin\b/g,operator("in"))     
    str = str.replace(/\bis\b/g,operator("is"))
    str = str.replace(/\bor\b/g,operator("or"))
    str = str.replace(/\band\b/g,operator("and"))
    str = str.replace(/\bnot\b/g,operator("not"))
    str = str.replace(/\bnew\b/g,operator("new"))
    str = str.replace(/\blet\b/g,operator("let"))
    str = str.replace(/\bset\b/g,operator("set"))
    str = str.replace(/\bput\b/g,operator("put"))
    str = str.replace(/\bpop\b/g,operator("pop"))    
    //symbols
    str = str.replace(/\b=&gt;\b/g,operator("=&gt;"))

    //create the new statement
    return str
}

function eve_render() {
    const eve_code = document.getElementsByClassName("language-eve");
    if (typeof(eve_code) != "undefined") {
        let i = 0
        let t = ""
        let comment = ""
        let start_comments = false
        for (e of eve_code ) {
            if (e.tagName =="CODE") {
                lines = e.innerText.split("\n")
                // format each line
                for (line of lines) {
                    //check if line is empty
                    if (i == 0 && line =="") {
                        i += 1
                        continue
                    }
                    //check if start with comments
                    if (line.trim().substr(0,2)=="/*" || 
                        line.trim().substr(0,2)=="+-" ||  
                        start_comments) {
                        start_comments = true
                        line = comments(line)
                    } else if (line.trim().substr(0,1)=="#") {
                        line = title(line)
                    } else if (line.trim().substr(0,2)=="**") {
                        line = subtitle(line)
                    } else if (line.trim().substr(0,2)=="--") {
                        line = comments(line) 
                    } else {
                        //split away end comments //

                        parts = line.split(" --")
                        if (parts.length > 1) {
                            line = parts[0]
                            comment = " --" + parts[1]
                        } else {
                            comment = ""
                        }
                        //avoid style in strings
                        if (line.search(/\"/) > 0) {
                            parts = line.split('"');
                            line  = ""; j = 0
                            for (part of parts) {
                                if (j == 1) {
                                    line  += strings('"' + part + '"')
                                    j = 0
                                } else {
                                    line  += apply_style(part)
                                    j = 1
                                }
                            }
                        } else {
                            line  = apply_style(line)
                        }
                        //reattach comments
                        if (comment!="") {
                            line = line + comments(comment)
                        }
                    }
                    //add new line if required
                    i += 1
                    if (i < lines.length || line!="") {
                       t += line_span(line)
                    }
                    //check if end of comments
                    if (line.search(/\*\//)>0 || line.search(/\-\+/)>0)
                    {
                        start_comments = false
                    }
                }
                start_comments = false
                e.innerHTML = t;
                t = ""; i = 0
            }
            start_comments = false
        }
    } else {
      console.log("not_found")
    }
}

function line_span(str) {
    var span = document.createElement("span");
    return "<span class=\"line\">"+ str + "</span>"
}


function title(str) {
    return "<span class=\"title\">"+ str + "</span>"
}

function subtitle(str) {
    return "<span class=\"subtitle\">"+ str + "</span>"
}

function comments(str) {
    return "<span class=\"comment\">"+ str + "</span>"
}

function keyword(str) {
    return "<span class=\"keyword\">"+ str + "</span>"
}

function types(str) {
    return "<span class=\"type\">"+ str + "</span>"
}

function control(str) {
    return "<span class=\"control\">"+ str + "</span>"
}

function interrupt(str) {
    return "<span class=\"interrupt\">"+ str + "</span>"
}

function operator(str) {
    return "<span class=\"operator\">"+ str + "</span>"
}

function strings(str) {
    return "<span class=\"string\">"+ str + "</span>"
}

function builtin(str) {
    return "<span class=\"builtin\">"+ str + "</span>"
}
