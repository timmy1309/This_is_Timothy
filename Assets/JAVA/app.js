const modelviewer = document.getElementById("modelviewer")

function runAnimation(animationName, seconds) {
    console.log(modelviewer.availableAnimations)

    modelviewer.setAttribute("animation-name", animationName)

    if(animationName === "Backflip"){
        modelviewer.play({
            repetitions: 1
        })
    }

    const myTimeout = setTimeout(function(){
        modelviewer.setAttribute("animation-name", "Idle")
    }, seconds * 1000);
}