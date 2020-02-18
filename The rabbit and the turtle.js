 <!--
		   
		   var count  = -3;
		   var numberT;
		   var numberH;
		   var positionT = 1;
		   var positionH = 1;
		   var actionT ="";
		   var actionH ="";
		   var interval = null;
		   
		   function start(){
		  
		   var button = document.getElementById("guessButton");
		   button.addEventListener("click",guess,false);
		    drawLine1();
			drawLine2();
		   
		   }
		  

 
		   
		   
		   function guess()
		   {  
		       if(interval!=null){
			   return;}
			  drawLine1();
			  drawLine2();
	          count = -3;
			  positionT =1;
			  positionH =1;
			  document.getElementById("count").innerHTML = "Time: 0";
			  document.getElementById("claim").innerHTML= "Referee: ";
              interval= window.setInterval("run()",1000);
           
		      
			 
		}
		   
		   function run(){
		   

			count++;
		   
		   
		   switch(count){
		   
		  case -2:
		      document.getElementById("claim").innerHTML="Referee: ON YOUR MARK, GET SET";
			  break;
		  case -1:
		      document.getElementById("claim").innerHTML="Referee: BANG!!!";
			  break;
		  case 0:
		       document.getElementById("claim").innerHTML="Referee: AND THEY'RE OFF!!!";
			  break;
			 }
			if(count>=1){
			document.getElementById("count").innerHTML = "Time:" +count;
			numberT = Math.floor(1+Math.random()*10);
			numberH = Math.floor(1+Math.random()*10);
			//Tortoise
			if(numberT>=1&&numberT<=5){		
			   positionT+=3;
			   actionT ="Tortoise fast plod!";
			   
			}else{
			  if(numberT>=6&&numberT<=7){
			     positionT-=6;
				 if(positionT<=0){
				    positionT=1;
				 }
				 
				 actionT ="Tortoise slip!";}
			  else{
			     positionT+=1;
				 actionT ="Tortoise slow plod!";}

			}
			// Hare
			if(numberH>=1&&numberH<=2){
			      actionH="Hare sleep!";
			}else{
			   if(numberH>=3&&numberH<=4){
			   
			       positionH+=9;
				   actionH="Hare big hop!";
			   
			   
			   }else{
			      if(numberH==5){
				     positionH-=12;
					 if(positionH<=0){
				    positionH=1;
				 }
					 actionH="Hare big slip!";}
				  
				  if(numberH>=6&&numberH<=8){
				     positionH+=1;
					 actionH="Hare small hop!";}
				  
				  if(numberH>=9&&numberH<=10){
				     positionH-=2;
					 if(positionH<=0){
				    positionH=1;
				 }
                     actionH="Hare small slip!";}					 
			   }
			}
			
			if(positionH==positionT){
			    if(positionH>=70){
				drawLine1();
				drawLine2(70,70,true);
				    document.getElementById("claim").innerHTML="Referee: IT'S A TIE.";
				}else{
				    if(positionH<=35){
					
					   drawLine1(positionT,positionH,true);
					   drawLine2();
					   document.getElementById("claim").innerHTML="Referee: "+actionT+" "+actionH;
					}else{
					    drawLine1();
						drawLine2(positionT,positionH,true);
						document.getElementById("claim").innerHTML="Referee: "+actionT+" "+actionH;
					
					}
				}
			
			
			
			
			}else{
			   
			   if(positionT>=70){
			        if(positionH<=35){
					
					   drawLine1(0,positionH,false);
					   drawLine2(70,0,false);
					}else{
					    drawLine1();
						drawLine2(70,positionH,false);
					
					}
					
					document.getElementById("claim").innerHTML="Referee: TORTOISE WINS!!! YAY!!!";
					
					 
			   }else{
			         if(positionH>=70){
					    if(positionT<=35){
					
					   drawLine1(positionT,0,false);
					   drawLine2(0,70,false);
					}else{
					    drawLine1();
						drawLine2(positionT,70,false);
					
					}
					
					document.getElementById("claim").innerHTML="Referee: HARE WINS. YUCK!";
					 
	
					}else{
					  if(positionH<=35&&positionT<=35){
					        drawLine1(positionT,positionH,false);
							drawLine2();
							document.getElementById("claim").innerHTML="Referee: "+actionT+" "+actionH;
							
					  }
					  if(positionH<=35&&positionT>35){
					     drawLine1(0,positionH,false);
						 drawLine2(positionT,0,false);
						 document.getElementById("claim").innerHTML="Referee: "+actionT+" "+actionH;
					  
					  }
					  if(positionH>35&&positionT<=35){
					        drawLine1(positionT,0,false);
						 drawLine2(0,positionH,false);
						 document.getElementById("claim").innerHTML="Referee: "+actionT+" "+actionH;
					  
					  }
					  if(positionH>35&&positionT>35){
					     drawLine1();
						 drawLine2(positionT,positionH,false);
						 document.getElementById("claim").innerHTML="Referee: "+actionT+" "+actionH;
				  
					  }
					
					}
	   
			   }
	
			}
	
		}
			 
			 
			 
			 
			 
		   
		   if(positionH>=70||positionT>=70){
		        window.clearInterval(interval);
				interval=null;
				
		   
		   }
		   
		   }
		   
		   
		   
		   
		   
		  function drawLine1(Tortoise,Hare,same)
		   {
		      if(Tortoise==null){
			  var line = "<table><tbody><tr>";
		      var result= "<tr>";
		       for(var i = 0; i<35;i++){
			          
					
					  line += "<td>"+(i+1)+"</td>";
					  result +="<td>_</td>";
					  
			   
			   }
              line += "</tr>"+result+"</tr></tbody></table>";
			  document.getElementById("line1").innerHTML = line;
			  
			  
			  }else{
			  var line = "<table><tbody><tr>";
		      var result= "<tr>";
		       for(var i = 0; i<35;i++){
			          
					  line += "<td>"+(i+1)+"</td>";
					  if(same){
					     if(Hare==(i+1)){
						 result+="<td>OUCH!!!</td>";
						 }else{
						   result+="<td>_</td>";
						 }
					  }else{
					   if(Hare==(i+1)){
					      result +="<td>H</td>"; 
					  }else{
					    if(Tortoise==(i+1)){
					      result +="<td>T</td>";
					  }
					  else{
					    result +="<td>_</td>";
					     }		  
					 }
					 }
					 
					  
					  
				 
					  
			   
			   }
              line += "</tr>"+result+"</tr></tbody></table>";
			  document.getElementById("line1").innerHTML = line;  
			  
			  
			  
			  
			  
			  }
			  
			  
		   
		   
		   
		   } 
		   
		   function drawLine2(Tortoise,Hare,same)
		   {
		      if(Tortoise==null){
			  var line = "<table><tbody><tr>";
		      var result= "<tr>";
		       for(var i = 35; i<70;i++){
			          
					
					  line += "<td>"+(i+1)+"</td>";
					  result +="<td>_</td>";
					  
			   
			   }
              line += "</tr>"+result+"</tr></tbody></table>";
			  document.getElementById("line2").innerHTML = line;
			  
			  
			  }else{
			  var line = "<table><tbody><tr>";
		      var result= "<tr>";
		       for(var i = 35; i<70;i++){
			          
					  line += "<td>"+(i+1)+"</td>";
					  if(same){
					     if(Hare==(i+1)){
						 result+="<td>OUCH!!!</td>";
						 }else{
						   result+="<td>_</td>";
						 }
					  }else{
					   if(Hare==(i+1)){
					      result +="<td>H</td>"; 
					  }else{
					    if(Tortoise==(i+1)){
					      result +="<td>T</td>";
					  }
					  else{
					    result +="<td>_</td>";
					     }		  
					 }
					 }
					 
					  
					  
				 
					  
			   
			   }
              line += "</tr>"+result+"</tr></tbody></table>";
			  document.getElementById("line2").innerHTML = line;  
			  
			  
			  
			  
			  
			  }
			  
			  
		   
		   
		   
		   } 
		   
		   
		   
		   
		   
		   
		   window.addEventListener("load",start,false);
		   
		   
		   //-->