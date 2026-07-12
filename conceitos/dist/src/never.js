"use strict";
function jogarErro(msg) {
    throw new Error(msg);
}
function loopInfinito() {
    while (true) { }
}
function falha() {
    return jogarErro("Deu problema!");
}
