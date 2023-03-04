document.getElementById('calc-button').onclick = function () {
    let a = document.getElementById('a-value').value
    let b = document.getElementById('b-value').value

    a = Number(a)
    b = Number(b)

    const h = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById('result').innerHTML = h.toFixed(4);
}