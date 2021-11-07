
<?php
for($i=0; $i<32; $i++){
    $list[] = 0;
}
?>

<?php
$conn = mysqli_connect("localhost", "root", "lsm010522", "subway");
$sql = "SELECT arrive, seat FROM customer WHERE room=3";
$result = mysqli_query($conn, $sql);
$list2=array();
$list3=array();
$x=0;

if(mysqli_num_rows($result)> 0){
    while($row = mysqli_fetch_assoc($result)) {
        $list2[$x] = $row["arrive"];
        $list3[$x++] = $row["seat"];
        $iidx = $row["seat"];
        $list[$iidx] = 1;
    }
}

function timeplus($add){
    global $list;
    global $list3;
    global $list2;
    $nowtime = 2235 + $add;
    

    for($i=0; $i<3; $i++){
        $iidx = $list3[$i];
        $ttime = $list2[$i];
        $p = (int)$ttime; 
    
        $dif = $p-$nowtime;
        if($dif==5) {
            $list[$iidx] = 2;
        }
        else if ($dif == 0){
            $list[$iidx] = 3;
        }
        re();
    }
    
}

for($i=0; $i<3; $i++){
    timeplus($i);
    
}

?>




<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>Train Seat Booking</title>
    <link rel="stylesheet" href="btn.css"/>
    <script src="newbtnscript.js"></script>
</head>
<body>

<div class="container">
        <label id="train">
            3번칸
        </label>
    </div>
    <ul class = "showcase">
        <li>
            <div class="grey"> </div>
            <small>no answer</small>
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
    <?php 
    function re(){?>
    <div class="contianer">
    <div class="screen"></div>

    <?php
    global $list;
    $i =0;
    while ($i < 32) {
        if ($i == 16){ ?>
            <br><br><br> <?php
        }
        if ($list[$i] == 0){?>
            <div class="grey"></div><?php
        }
        else if ($list[$i] == 1){?>
            <div class="grey yellow"></div><?php
        }
        else if($list[$i] == 2){?>
            <div class="grey red"></div><?php
        }
        else if($list[$i] == 3){?>
            <div class="grey green"></div><?php
        }
        $i = $i+1;   
    }

    ?>
    <br> <div class="screen"></div>
    </div>
    <?php
} ?>
    
</body>
</html>