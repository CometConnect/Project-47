//--------------------------------------------------------------------------------//
//Costume function zone
//--------------------------------//
function needs( color )
{
    if( frameCount===1 )
    {
        Log( "Log" , "Starting up the loop" );
    }
    background( color );
    drawSprites(); 
}
//--------------------------------//
//quick console
function Log( type , message )
{
    var VAl = type.toLowerCase();
    switch ( VAl ) {
        case "log":
            console.log( message );
            break;

        case "warn":
            console.warn( message );
            break;

        case "error":
            console.error( message );
            break;

        default:
            console.error( "message 'function' has invaid first value, the possible values are 'log', 'warn' & 'error'." );
    }
}
//--------------------------------//
//quick dialog
function dialog( type , message )
{
    var VAl = type.toLowerCase();
    switch ( VAl ) {
        case "alert":   
            alert( message );
            break;

        case "confirm":
            confirm( message );
            break;

        case "prompt":
            prompt( message );
            break;
    
        default:
            console.error( "message 'dialog' has invaid first value, the possible values are 'alert', 'prompt' & 'confirm'." );
            break;
    }
}
//--------------------------------//
//quick text maker
function TEXT( Text , x , y , size , color )
{
    push();
    fill( color );
    textSize( size );
    text( Text , x , y );
    pop();
}
//--------------------------------//
function ProoCess()
{
    //Key Value Method
    //Step 1
    var Step1 = year.slice( year.length-2 )+year.slice( year.length );
    //Step 2
    var Step2 = (Step1-Step1%4)/4;
    //Step3
    var Step3 = Step2+date;
    //Step 4
    var monthKey;
    switch( month )
    {
        case "Jan" : monthKey = 1 ; break ;
        case "Feb" : monthKey = 4 ; break ;
        case "Mar" : monthKey = 4 ; break ;
        case "Apr" : monthKey = 0 ; break ;
        case "May" : monthKey = 2 ; break ;
        case "Jun" : monthKey = 5 ; break ;
        case "Jul" : monthKey = 0 ; break ;
        case "Aug" : monthKey = 3 ; break ;
        case "Sep" : monthKey = 6 ; break ;
        case "Oct" : monthKey = 1 ; break ;
        case "Nov" : monthKey = 4 ; break ;
        case "Dec" : monthKey = 6 ; break ;
        default : break ;
    }
    var Step4 = Step3 + monthKey;
    if( year%4===0 )
    {
        if( month === "Jan" || month === "Feb" )
        {
            Step4--;
        }
    }
    //Step 5
    var YearKey=1;
    switch( year )
    {
        case 100 : YearKey = 4 ;
        case 200 : YearKey = 2 ;
        case 300 : YearKey = 0 ;
        case 400 : YearKey = 6 ;
        case 500 : YearKey = 4 ;
        case 600 : YearKey = 2 ;
        case 700 : YearKey = 0 ;
        case 800 : YearKey = 6 ;
        case 900 : YearKey = 4 ;
        case 1000 : YearKey = 2 ;
        case 1100 : YearKey = 0 ;
        case 1200 : YearKey = 6 ;
        case 1300 : YearKey = 4 ;
        case 1400 : YearKey = 2 ;
        case 1500 : YearKey = 0 ;
        case 1600 : YearKey = 6 ;
        case 1700 : YearKey = 4 ;
        case 1800 : YearKey = 2 ;
        case 1900 : YearKey = 0 ;
        case 2000 : YearKey = 6 ;
        case 2100 : YearKey = 4 ;
        case 2200 : YearKey = 2 ;
        case 2300 : YearKey = 0 ;
        case 2400 : YearKey = 6 ;
        case 2500 : YearKey = 4 ;
        case 2600 : YearKey = 2 ;
        case 2700 : YearKey = 0 ;
        case 2800 : YearKey = 6 ;
        case 2900 : YearKey = 4 ;
        case 3000 : YearKey = 2 ;
    }
    var qwerwerewe = Step4 + YearKey;
    var Step5 = qwerwerewe.slice( qwerwerewe.length-2 , qwerwerewe.length );
    //Step 6
    var Step6 = Step5 + Step1;
    //Step 7
    var Answer = Step6%7;
    var Finally;
    switch( Answer )
    {
        case 1 : Finally = "Monday" ; break;
        case 2 : Finally = "Tuesday" ; break;
        case 3 : Finally = "WednesDay" ; break;
        case 4 : Finally = "Thursday" ; break;
        case 5 : Finally = "Friday" ; break;
        case 6 : Finally = "Saturday" ; break;
        case 7 : Finally = "Sunday" ; break;
        default : break;
    }
    Log( "log" , Step1 );
    Log( "log" , Step2 );
    Log( "log" , Step3 );
    Log( "log" , Step4 );
    Log( "log" , Step5 );
    Log( "warn" , Step6 );
    Log( "log" , Answer );
    Log( "log" , Finally );
}
//--------------------------------//
//--------------------------------------------------------------------------------//