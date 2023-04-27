console.log('Welcome to tut17 on events');

document.getElementById('heading').addEventListener('click', function(e){
    console.log('You have clicked the heading')
    // location.href = '//codewithharry.com'
    
    // apart from click we also have mousehover event

    let variable;
    variable = e.target;
    variable = e.target.className;
    variable = e.target.classList;

    // offset tells how far we clicked away from the event
    // variable = e.offsetX;
    // variable = e.offsetY;

    // client tells us how far we have clicked from browser window
    variable = e.clientX;
    variable = e.clientY;

    console.log(variable);
});
