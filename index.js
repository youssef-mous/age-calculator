btnHandler = () => {
    const jour = document.getElementById("day").value;
    const mois = document.getElementById("month").value;
    const anne = document.getElementById("year").value;
    const date=new Date();
    console.log(date.getDate());
    


    if(isValid(jour,mois,anne)){
        let contjour=date.getDate()-jour;
        let contmois=(date.getMonth()+1)-mois;
        let contanne=date.getFullYear()-anne;;
    
        
        if(contjour<0){
            contmois--;
            if(mois==2 && anne%4==0){
                contjour+=29;
            }else{
                if (mois==2 && anne%4!==0) {
                    
                    contjour+=28;
                  
                }else{
                    if((mois%2==0&& mois<8 )||(mois%2!==0 && mois>=8)){
                        contjour+=30;
                    
                    }else{
                        if((mois%2==0&& mois>=8 && mois!==2)||(mois%2!==0 && mois<8 &&mois!==2)){
                            contjour+=31;
                        }
                        
                    }
                }
            }
           

        }

        if(contmois<0){
            contmois+=12;
            contanne-=1;
        }
       
        
          
          document.getElementById("res_y").innerText=contanne;
          document.getElementById("res_m").innerText=contmois;
          document.getElementById("res_d").innerText=contjour;
    }


}

function isValid(inputjour, inputmois, inputanne) {
    let yerror = true, derror = true, merror = true;
    let anneAct = new Date();
    let form = document.getElementsByClassName("form")[0];
   
 
  
    if (inputanne > anneAct.getFullYear() || inputanne==0) {

        if(inputanne==0){
            document.getElementById("y").innerHTML = "This field is required ";
        }
        else{document.getElementById("y").innerHTML = "Must be in the past";}
        if (!document.getElementById("test").classList.contains("err")) {
            form.classList.add('err');
        }
        yerror = false;

    } else {
        
        document.getElementById("y").innerText = "";

        yerror = true;
    }

    if (inputmois > 12|| inputmois==0) {
        if(inputmois==0){
            document.getElementById("m").innerHTML = "This field is required ";
        }
        else{document.getElementById("m").innerHTML = "Must be a valid month";}
        if (!document.getElementById("test").classList.contains("err")) {
            form.classList.add('err');
        }
        merror = false;


    } else {
        document.getElementById("m").innerText = "";
    
       
       
        merror = true;
    }



    if ((inputjour > 31)||(inputjour==0)|| (inputmois == 2 && inputanne % 4 !== 0 && inputjour == 29) || (inputmois % 2 == 0 && inputjour == 31 && inputmois < 8) || (inputmois % 2 !== 0 && inputjour == 31 && inputmois >= 8)) {
        document.getElementById("d").innerHTML = "Must be a valid day";
        if(inputjour==0){
            document.getElementById("d").innerHTML = "This field is required ";
        }
        if(inputjour<=31&& inputjour>0){
            document.getElementById("d").innerHTML = "Must be a valid date";
        }
        if (!document.getElementById("test").classList.contains("err")) {
            form.classList.add('err');
        }
        derror = false;
    } else {
        document.getElementById("d").innerText = "";
        derror = true;

    }
    if (yerror && merror && derror) {
        form.classList.remove('err');
    }

    return derror && merror && yerror;
}