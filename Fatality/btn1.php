<?php
   function makeOption(){
    $arr=array("선택하세요", "동대문","충무로","명동","회현", "신용산", "사당");
      for ($i=0;$i<7;$i++){
        $name=$arr[$i];
         echo "<option value=".$name.">".$name."</option>";
    }
}
?>

<?php
$list = array();
$list = [];

for($i=0; $i<32; $i++){
    $list[] = 0;
}
?>

<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>Train Seat Booking</title>
    <link rel="stylesheet" href="btn.css"/>
    <link rel="stylesheet" href="style.css"/>
    <link rel="stylesheet" href="sitstyle.css"/>
    <script src="newbtnscript.js"></script>
</head>
<body>
<h2>room</h2>
<div id="back" style= "text-align: center;background-color:rgb(231, 168, 233);border:5pt ridge rgb(206, 98, 221);">
        <form method="get" action="booking1.php" id='my_form' onsubmit="return check()" name="fr">
            <p>출발역
                    <select name="start" onchange="handleOnChange(this); gotime();">
                         <?php makeOption(); ?> 
                     </select>
                        <div id="result"></div>
                    출발 시간 입력
                        <input type="text" name="chulbal"  value="" id="go"/>
                        <button class="gobtn" type="button" onclick="printName();findtrainidx();">입력</button>
                        <div id='result'></div>
                </p>
                <p>
                    도착역
                    <select name="end" onchange="handleOnChange2(this);findTime();" size="1">
                        <?php makeOption(); ?>
                    </select>
                </p>
                <p>전화번호
                <input type="tel" name="tellme" placeholder="010-0000-0000" patern="[0-9]{3}-[0,9]{4}-[0-9]{4}">
                </p>
                <p> 좌석번호(칸)
                    <input type="number" name="roomnum" id="roomnum" min="0" max="3"/> 
                </p>
                <p> 좌석번호(번호)
                    <input type="number" name="seatnum" id="seatnum" min="0" max="32"/> 
                </p>
                <p>개인정보 동의
                    <input type="radio" name="decision" value="agree">동의
                    <input type="radio" name="decision" value="disagree">비동의
                </p>
                <input type="submit" name="data" onclick="agreeAlert(decision.value)" formation="joinUs.php"> </input>
                <input type="reset" value="취소">    
            </form>
        </div>


    <div class="container">
        <label id="train">
            1번칸
        </label>
    </div>
    <ul class = "showcase">
        <li>
            <div class="grey"> </div>
            <small\>no answer</small>
        </li>
        <li>
            <div class="grey yellow"> </div>
            <small>sit</small>
        </li>
        <li>
            <div class="grey red"> </div>
            <small>leave</small>
        </li>
        <li>
            <div class="grey green"> </div>
            <small>able</small>
        </li>
    </ul>
    <div class="contianer">
    <div class="screen"></div>

    <?php
    $i =0;
    while ($i < 32){
        if ($i == 16){?>
            <br><br><br> <?php
        }
        if ($list[$i] == 0){?>
            <div class="grey"></div><?php
        }
        $i = $i+1;        
    }
    ?>
    <br> <div class="screen"></div>
    </div>
    
</body>
</html>