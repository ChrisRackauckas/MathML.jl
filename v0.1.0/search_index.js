var documenterSearchIndex = {"docs":
[{"location":"","page":"MathML","title":"MathML","text":"CurrentModule = MathML","category":"page"},{"location":"#MathML","page":"MathML","title":"MathML","text":"","category":"section"},{"location":"","page":"MathML","title":"MathML","text":"","category":"page"},{"location":"","page":"MathML","title":"MathML","text":"Modules = [MathML]","category":"page"},{"location":"#MathML.check_ivs-Tuple{Any}","page":"MathML","title":"MathML.check_ivs","text":"ensure theres only one independent variable, returns false if more than one iv\n\n\n\n\n\n","category":"method"},{"location":"#MathML.extract_mathml","page":"MathML","title":"MathML.extract_mathml","text":"extract_mathml()\n\ngiven a filename, EzXML.Document, or EzXML.Node  returns all of the MathML nodes. \n\n\n\n\n\n","category":"function"},{"location":"#MathML.mathml_to_nums","page":"MathML","title":"MathML.mathml_to_nums","text":"mathml_to_nums()\n\ngiven a filename or an EzXML.Document or EzXML.Node,  finds all of the <ci>s and defines them as Symbolics.jl Nums returns a Vector{Num}. Note, the root namespace needs to be MathML\n\n\n\n\n\n","category":"function"},{"location":"#MathML.parse_apply-Tuple{Any}","page":"MathML","title":"MathML.parse_apply","text":"parse_apply(node)\n\nparse an <apply> node into Symbolics form\n\nhow to deal w apply within apply, need to ensure we've hit bottom\n\n\n\n\n\n","category":"method"},{"location":"#MathML.parse_bvar-Tuple{Any}","page":"MathML","title":"MathML.parse_bvar","text":"parse_bvar(node)\n\nparse a <bvar> node\n\n\n\n\n\n","category":"method"},{"location":"#MathML.parse_ci-Tuple{Any}","page":"MathML","title":"MathML.parse_ci","text":"parse_ci(node)\n\nparse a <ci> node\n\n\n\n\n\n","category":"method"},{"location":"#MathML.parse_cn-Tuple{Any}","page":"MathML","title":"MathML.parse_cn","text":"parse_cn(node)\n\nparse a <cn> node\n\n\n\n\n\n","category":"method"},{"location":"#MathML.parse_cn_w_sep-Tuple{Any}","page":"MathML","title":"MathML.parse_cn_w_sep","text":"parse_cn_w_sep(node)\n\nparse a <cn type=\"..\"> node\n\nwhere type ∈ [\"e-notation\", \"rational\", \"complex-cartesian\", \"complex-polar\"]\n\n\n\n\n\n","category":"method"},{"location":"#MathML.parse_diff-Tuple{Any}","page":"MathML","title":"MathML.parse_diff","text":"parse_diff(x)\n\nparse a <diff>\n\n\n\n\n\n","category":"method"},{"location":"#MathML.parse_lambda-Tuple{Any}","page":"MathML","title":"MathML.parse_lambda","text":"parse_lambda(node)\n\nparse a <lambda> node\n\n<lambda>\n  <bvar> x1 </bvar><bvar> xn </bvar>\n   expression-in-x1-xn \n</lambda>\n\n\n\n\n\n","category":"method"},{"location":"#MathML.parse_node-Tuple{Any}","page":"MathML","title":"MathML.parse_node","text":"parse_node(node)\n\ntake a node and parse into Symbolics form\n\n\n\n\n\n","category":"method"},{"location":"#MathML.@MathML_str-Tuple{Any}","page":"MathML","title":"MathML.@MathML_str","text":"@MathML_str(s)\n\nutility macro for parsing xml strings into symbolics\n\n\n\n\n\n","category":"macro"},{"location":"#MathML.@xml_str-Tuple{Any}","page":"MathML","title":"MathML.@xml_str","text":"@xml_str(s)\n\nutility macro for parsing xml strings into node\n\n\n\n\n\n","category":"macro"}]
}