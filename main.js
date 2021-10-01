function computeForce() {

    var m, a, force
    m = document.getElementById("getMass").value;
    a = document.getElementById("getAcceleration").value;

    force = (m*a);


function computeAvgVelocity(d, v, t, a1 ) {

    d = document.getElementById("displacement").value;
    v = document.getElementById("getVelocity").value;
    t = document.getElementById("getTime").value;
    a1 = document.getElementById("getAcceleration2").value;

    const velocity = ((v * t ) - (1/2) * (a1 * t)^2);

    document.getElementById("displacement").innerHTML = "Force: " + displacement;
}
function computePrinciple(s1,s2,s3 ) {

    s1 = document.getElementById("getSideA").value;
    s2 = document.getElementById("getSideB").value;
    s3 = document.getElementById("getSideC").value;

   const final = (-b); //have not finished formula

    document.getElementById("ans1Out, ans2Out").innerHTML = "Measurements: " + final;
}
function computePresentValue(p,r, n, numPs ) {

    p = document.getElementById("pOut").value;
    r = document.getElementById("rOut").value;
    n = document.getElementById("nOut").value;
    numPs = document.getElementById("pmtOut").value;


    const finalAmount = (numPs)*(1-(1/(1+r)^n)/r);
    document.getElementById("pmtOut").innerHTML = "Measurements: " + finalAmount;}}
    


