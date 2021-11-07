<?php
   function makeOption(){
        $arr=array("선택하세요", "동대문","충무로","명동","회현", "신용산", "사당");
      for ($i=0;$i<7;$i++){
        $name=$arr[$i];
         echo "<option value=".$name.">".$name."</option>";
    }
}
?>


<!DOCTYPE html>

<head>
    <meta charset="UTF-8">
    <title>have seated</title> 
    
    <link rel="stylesheet" href="sitstyle.css"/>
    <script src="newbtnscript.js"></script>
</head>
<body style='background-color: rgb(162, 213, 233)'>
    <h2>I want to sit</h2>
    
    <div class="btnlist">
        <ul>
            <li><a href="btn1.php">
                <div class="train">
                    <div class="red">red</div>
                    <div class="yellow">yellow</div>
                    <div class="green">green</div>
                    <div class="noans">no answer</div>
                    <img src="outside.jpg">
                    ::after
                </div>
                <div><h3>1번칸</h3></div>
            </a></li>
            <li><a href="btn2.php">
                <div class="train">
                    <div class="red">red</div>
                    <div class="yellow">yellow</div>
                    <div class="green">green</div>
                    <div class="noans">no answer</div>
                    <img src="outside.jpg">
                </div>
                <div><h3>2번칸</h3></div>
            </a></li>
            <li><a href="btn3.php">
                <div class="train">
                    <div class="red">red</div>
                    <div class="yellow">yellow</div>
                    <div class="green">green</div>
                    <div class="noans">no answer</div>
                    <img src="outside.jpg">
                </div>
                <div><h3>3번칸</h3></div>
            </a></li>
        </ul>
    </div>
    
    
</body>
</html>