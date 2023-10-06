function closing(e)
{
    let a=confirm("Do you want to close");
    if (a) document.getElementById(e).hidden=true;
}
let count=0;

function stricking(e)
{
    let d=document.getElementById(`temp-${e}`)
    if (d.checked) document.getElementById(`content-${e}`).style.textDecoration="line-through";
    else document.getElementById(`content-${e}`).style.textDecoration="none";
}
function add()
{
    let tasks=document.getElementById('tasks-bar')
    let temp=`
    <div class='form-check' id='main-${count}'>
    <div class='row border no-gutters shadow mt-3'>
    <div class='col-12'>
        <input type='checkbox' class='ml-1 form-check-input' id='temp-${count}' onclick='stricking(${count})'>
        <label for='temp' class='form-check-label ml-4 pl-1' id='content-${count}'>Temp</label>
        <button class='btn float-end p-0 pr-2 pl-2' onclick="closing('main-${count}')"><i class="fa-solid fa-x"></i></button>
      </div>
      <div class='col-2 mr-0 mt-1 ml-2'> Deadline: </div>
      <div class='col-4 mt-1 ml-0' id='date-entry-${count}'></div>
      <div class='col-6' id='button-${count}'>
        <button class='btn float-end p-0 pr-2 pl-2 btn-primary mt-2' data-bs-toggle='collapse' data-bs-target='#pop-${count}'><i class="fa-solid fa-chevron-down"></i></button>
      </div>
      <div class='col-12 mt-2'>
        <div id='pop-${count}' class='collapse'>
            <div class='card card-body mb-2' id='pop1-${count}' style="background: linear-gradient(to bottom, #0066ff 0%, #00ff00 100%);"></div>
        </div>
      </div>
    </div>
    </div>`
    let task_name=document.getElementById('taskname');
    if (task_name.value.length==0)
    {
        alert("Taskname is required");
        task_name.style.borderColor = "red";
        return 0;
    }
    else 
    {
        if (count==0) tasks.innerHTML=temp;
        else tasks.innerHTML+=temp;
        task_name.style.borderColor = "black";
        let task_date=document.getElementById('taskdate').value;
        if (task_date.length==0) document.getElementById(`date-entry-${count}`).innerHTML="Not mentioned"
        else
        {
            document.getElementById(`date-entry-${count}`).innerHTML=task_date
        }
        
        document.getElementById(`content-${count}`).innerHTML=task_name.value
        let task_desc=document.getElementById('taskdesc').value;
        if (task_desc.length==0) document.getElementById(`button-${count}`).hidden=true;
        document.getElementById(`pop1-${count}`).innerHTML=task_desc
        count++;
    }
}
