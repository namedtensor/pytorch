katex_options = {
macros: {"\\name":"\\mathsf{#1}",
"\\nidx":"\\name{#1}(#2)",
"\\nset":"\\name{#1}[#2]",
"\\nbin":"\\mathbin{\\underset{\\name{#1}}{#2}}",
"\\ndot":"\\nbin{#1}{\\odot}",
"\\ncat":"\\nbin{#1}{\\oplus}",
"\\nsum":"\\sum_{\\name{#1}}",
"\\nfun":"\\mathop{\\underset{\\name{#1}}{\\mathrm{#2}}}",
"\\nmov":"\\name{#1}\\rightarrow\\name{#2}",},
delimiters: [
        { left: "\\(", right: "\\)", display: false },
        { left: "\\[", right: "\\]", display: true }
        ]
}
document.addEventListener("DOMContentLoaded", function() {
  renderMathInElement(document.body, katex_options);
});
