window.WT_SETS = [
  {
    "set": 1,
    "questions": [
      {
        "number": 1,
        "question": "Create an HTML webpage displaying the college name, logo, address, vision, mission, departments, facilities and contact details. Use suitable headings, paragraphs, images and hyperlinks.",
        "language": "HTML",
        "code": "<!DOCTYPE html>\n<html>\n<head><title>College Profile</title></head>\n<body>\n  <h1>ABC College of Engineering</h1>\n  <img src=\"https://via.placeholder.com/80\" alt=\"College Logo\">\n  <p><strong>Address:</strong> Tech Campus, Hyderabad - 500081</p>\n  <hr>\n  <h2>Vision & Mission</h2>\n  <p><strong>Vision:</strong> Excellence in technical education and research.</p>\n  <p><strong>Mission:</strong> Educate future leaders with ethical and technical skills.</p>\n  <h2>Departments</h2>\n  <ul><li>Computer Science</li><li>Information Technology</li><li>AI & Data Science</li></ul>\n  <h2>Facilities</h2>\n  <ul><li>Digital Library</li><li>Computer Labs</li><li>High-Speed Wi-Fi</li></ul>\n  <h2>Contact</h2>\n  <p>Email: <a href=\"mailto:info@college.edu\">info@college.edu</a> | <a href=\"https://example.edu\">Website</a></p>\n</body>\n</html>",
        "explanation": "Semantic HTML tags (headings, img, p, ul, li, a) structured simply for college information.",
        "viva": [
          "What does href attribute specify in anchor tags? — The target URL of the hyperlink.",
          "What is the purpose of the alt attribute in img tags? — Alternate text displayed if the image fails to load, also used by screen readers."
        ]
      },
      {
        "number": 2,
        "question": "Write a PHP script that displays a welcome message containing your college name using echo or print.",
        "language": "PHP",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n<?php\n  $college = \"ABC College of Engineering\";\n  echo \"<h1>Welcome to \" . $college . \"!</h1>\";\n  print \"<p>Best wishes for your Web Technologies Lab exam.</p>\";\n?>\n</body>\n</html>",
        "explanation": "Uses echo and print with string concatenation (.) to display the welcome message.",
        "viva": [
          "Difference between echo and print? — echo returns no value and is faster; print returns 1."
        ]
      }
    ]
  },
  {
    "set": 2,
    "questions": [
      {
        "number": 1,
        "question": "Create an HTML registration form with name, gender, date of birth, email, phone, address, course selection, password, confirm password, submit and reset controls. Use labels and appropriate input types.",
        "language": "HTML",
        "code": "<!DOCTYPE html>\n<html>\n<head><title>Student Registration</title></head>\n<body>\n  <h2>Student Registration Form</h2>\n  <form action=\"#\" method=\"POST\">\n    <p><label>Name: <input type=\"text\" name=\"name\" required></label></p>\n    <p>Gender: \n      <label><input type=\"radio\" name=\"gender\" value=\"Male\" required> Male</label>\n      <label><input type=\"radio\" name=\"gender\" value=\"Female\"> Female</label>\n    </p>\n    <p><label>Date of Birth: <input type=\"date\" name=\"dob\" required></label></p>\n    <p><label>Email: <input type=\"email\" name=\"email\" required></label></p>\n    <p><label>Phone: <input type=\"tel\" name=\"phone\" pattern=\"[0-9]{10}\" required></label></p>\n    <p><label>Address:<br><textarea name=\"address\" rows=\"3\" cols=\"30\" required></textarea></label></p>\n    <p><label>Course: \n      <select name=\"course\" required>\n        <option value=\"CSE\">B.Tech CSE</option>\n        <option value=\"IT\">B.Tech IT</option>\n        <option value=\"AI\">B.Tech AI&DS</option>\n      </select>\n    </label></p>\n    <p><label>Password: <input type=\"password\" name=\"pass\" required minlength=\"6\"></label></p>\n    <p><label>Confirm Password: <input type=\"password\" name=\"cpass\" required minlength=\"6\"></label></p>\n    <p>\n      <input type=\"submit\" value=\"Register\">\n      <input type=\"reset\" value=\"Reset\">\n    </p>\n  </form>\n</body>\n</html>",
        "explanation": "Complete HTML5 registration form with radio buttons, date, email, textarea, select, submit and reset.",
        "viva": [
          "What does the pattern attribute do? — Enforces regex validation on form fields before submit."
        ]
      },
      {
        "number": 2,
        "question": "Create an HTML form to collect personal details. Submit and retrieve the values using $_GET, $_POST and $_REQUEST, and display the submitted information.",
        "language": "PHP",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Personal Details Form</h2>\n  <form method=\"POST\">\n    Name: <input type=\"text\" name=\"name\" required><br><br>\n    City: <input type=\"text\" name=\"city\" required><br><br>\n    <input type=\"submit\" value=\"Submit\">\n  </form>\n\n<?php\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\") {\n    $name = $_POST[\"name\"];\n    $city = $_REQUEST[\"city\"];\n    echo \"<h3>Retrieved Details:</h3>\";\n    echo \"Name ($_POST): \" . htmlspecialchars($name) . \"<br>\";\n    echo \"City ($_REQUEST): \" . htmlspecialchars($city) . \"<br>\";\n}\n?>\n</body>\n</html>",
        "explanation": "Collects data via POST and reads values using $_POST and $_REQUEST superglobals.",
        "viva": [
          "What is inside $_REQUEST? — Combined array of $_GET, $_POST, and $_COOKIE."
        ],
        "files": [
          {
            "name": "form.html",
            "code": "<!-- form.html -->\n<form action=\"process.php\" method=\"POST\">\n  Name: <input type=\"text\" name=\"name\"><br><br>\n  City: <input type=\"text\" name=\"city\"><br><br>\n  <input type=\"submit\" value=\"Submit\">\n</form>"
          },
          {
            "name": "process.php",
            "code": "<?php\n// process.php\n$name = $_POST['name'] ?? '';\n$city = $_REQUEST['city'] ?? '';\necho \"Name via $_POST: \" . htmlspecialchars($name) . \"<br>\";\necho \"City via $_REQUEST: \" . htmlspecialchars($city) . \"<br>\";\n?>"
          }
        ]
      }
    ]
  },
  {
    "set": 3,
    "questions": [
      {
        "number": 1,
        "question": "Develop Home, About and Contact HTML pages. Add navigation links on each page so users can move between all three pages.",
        "language": "HTML",
        "code": "<!DOCTYPE html>\n<html>\n<head><title>Home Page</title></head>\n<body>\n  <nav>\n    <a href=\"home.html\">Home</a> | \n    <a href=\"about.html\">About</a> | \n    <a href=\"contact.html\">Contact</a>\n  </nav>\n  <hr>\n  <h1>Welcome to Home Page</h1>\n  <p>This is the main home page (home.html). Click About or Contact to navigate.</p>\n</body>\n</html>",
        "explanation": "Multi-page navigation linking home.html, about.html, and contact.html with relative hyperlinks.",
        "viva": [
          "How do pages link together? — Using <a href='filename.html'> with relative file paths."
        ],
        "files": [
          {
            "name": "home.html",
            "code": "<!DOCTYPE html>\n<html>\n<body>\n  <nav><a href=\"home.html\">Home</a> | <a href=\"about.html\">About</a> | <a href=\"contact.html\">Contact</a></nav>\n  <hr>\n  <h1>Home Page</h1>\n  <p>Welcome to our web portal!</p>\n</body>\n</html>"
          },
          {
            "name": "about.html",
            "code": "<!DOCTYPE html>\n<html>\n<body>\n  <nav><a href=\"home.html\">Home</a> | <a href=\"about.html\">About</a> | <a href=\"contact.html\">Contact</a></nav>\n  <hr>\n  <h1>About Us</h1>\n  <p>Department of Computer Science & Engineering, established in 2005.</p>\n</body>\n</html>"
          },
          {
            "name": "contact.html",
            "code": "<!DOCTYPE html>\n<html>\n<body>\n  <nav><a href=\"home.html\">Home</a> | <a href=\"about.html\">About</a> | <a href=\"contact.html\">Contact</a></nav>\n  <hr>\n  <h1>Contact Us</h1>\n  <p>Email: contact@college.edu | Phone: +91 9876543210</p>\n</body>\n</html>"
          }
        ]
      },
      {
        "number": 2,
        "question": "Accept a number through a form and write PHP code using loops and arithmetic operators to calculate and display the sum of its digits.",
        "language": "PHP",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <form method=\"POST\">\n    Enter number: <input type=\"number\" name=\"n\" required value=\"1234\">\n    <input type=\"submit\" value=\"Calculate Sum\">\n  </form>\n<?php\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\") {\n    $n = abs((int)$_POST[\"n\"]);\n    $temp = $n;\n    $sum = 0;\n    while ($temp > 0) {\n        $sum += $temp % 10;\n        $temp = (int)($temp / 10);\n    }\n    echo \"<h3>Sum of digits of $n = $sum</h3>\";\n}\n?>\n</body>\n</html>",
        "explanation": "Uses while loop with % 10 to extract digits and integer division to strip digits.",
        "viva": [
          "Why cast to (int) during division? — Division in PHP returns floats; casting truncates the decimal."
        ]
      }
    ]
  },
  {
    "set": 4,
    "questions": [
      {
        "number": 1,
        "question": "Create a weekly timetable using HTML table elements. Include days, time slots and subjects; use rowspan and colspan for suitable merged cells.",
        "language": "HTML",
        "code": "<!DOCTYPE html>\n<html>\n<head><title>Timetable</title></head>\n<body>\n  <h2>Class Timetable</h2>\n  <table border=\"1\" cellpadding=\"8\" style=\"border-collapse:collapse;text-align:center;\">\n    <tr bgcolor=\"#eee\">\n      <th>Day</th><th>9:00 - 10:00</th><th>10:00 - 11:00</th><th>11:00 - 12:00</th><th>12:00 - 1:00</th><th>1:00 - 3:00</th>\n    </tr>\n    <tr>\n      <td>Mon</td><td>WT</td><td>AI</td><td>CD</td><td rowspan=\"4\">LUNCH</td><td colspan=\"1\">WT Lab</td>\n    </tr>\n    <tr>\n      <td>Tue</td><td>CD</td><td>WT</td><td>AI</td><td>CD Lab</td>\n    </tr>\n    <tr>\n      <td>Wed</td><td colspan=\"2\">Project Review</td><td>WT</td><td>Library</td>\n    </tr>\n    <tr>\n      <td>Thu</td><td>AI</td><td>CD</td><td>WT</td><td>Sports</td>\n    </tr>\n  </table>\n</body>\n</html>",
        "explanation": "Uses HTML table with rowspan for Lunch break and colspan for 2-hour lab/reviews.",
        "viva": [
          "Difference between rowspan and colspan? — rowspan merges rows vertically; colspan merges columns horizontally."
        ]
      },
      {
        "number": 2,
        "question": "Accept a number from the user and write a PHP program to check whether it is prime. Display an appropriate result.",
        "language": "PHP",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <form method=\"POST\">\n    Number: <input type=\"number\" name=\"num\" required value=\"17\">\n    <input type=\"submit\" value=\"Check Prime\">\n  </form>\n<?php\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\") {\n    $n = (int)$_POST[\"num\"];\n    $isPrime = ($n > 1);\n    for ($i = 2; $i <= sqrt($n); $i++) {\n        if ($n % $i == 0) {\n            $isPrime = false;\n            break;\n        }\n    }\n    echo \"<h3>\" . ($isPrime ? \"$n is a PRIME number.\" : \"$n is NOT prime.\") . \"</h3>\";\n}\n?>\n</body>\n</html>",
        "explanation": "Checks divisibility from 2 to sqrt(n) using a for loop.",
        "viva": [
          "Why loop up to sqrt(n)? — All unique factor pairs appear at or before the square root."
        ]
      }
    ]
  },
  {
    "set": 5,
    "questions": [
      {
        "number": 1,
        "question": "Create a portfolio with navigation links for About, Education, Projects and Contact. Load the selected content in a main iframe.",
        "language": "HTML",
        "code": "<!DOCTYPE html>\n<html>\n<head><title>Portfolio</title></head>\n<body>\n  <h2>My Portfolio</h2>\n  <nav>\n    <a href=\"about.html\" target=\"contentFrame\">About</a> | \n    <a href=\"education.html\" target=\"contentFrame\">Education</a> | \n    <a href=\"projects.html\" target=\"contentFrame\">Projects</a> | \n    <a href=\"contact.html\" target=\"contentFrame\">Contact</a>\n  </nav>\n  <br>\n  <iframe name=\"contentFrame\" src=\"about.html\" width=\"100%\" height=\"250\" style=\"border:1px solid #ccc;\"></iframe>\n</body>\n</html>",
        "explanation": "Uses target='contentFrame' to load linked pages into <iframe name='contentFrame'>.",
        "viva": [
          "How do links target an iframe? — Set anchor target attribute equal to the iframe name attribute."
        ],
        "files": [
          {
            "name": "portfolio.html",
            "code": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>My Portfolio</h2>\n  <p><a href=\"about.html\" target=\"box\">About</a> | <a href=\"education.html\" target=\"box\">Education</a> | <a href=\"projects.html\" target=\"box\">Projects</a> | <a href=\"contact.html\" target=\"box\">Contact</a></p>\n  <iframe name=\"box\" src=\"about.html\" width=\"100%\" height=\"200\"></iframe>\n</body>\n</html>"
          },
          {
            "name": "about.html",
            "code": "<!DOCTYPE html><html><body><h3>About Me</h3><p>CSE student passionate about Web Technologies.</p></body></html>"
          },
          {
            "name": "education.html",
            "code": "<!DOCTYPE html><html><body><h3>Education</h3><p>B.Tech CSE (8.8 CGPA) | ABC Institute</p></body></html>"
          },
          {
            "name": "projects.html",
            "code": "<!DOCTYPE html><html><body><h3>Projects</h3><p>1. WT Lab Practice Studio<br>2. Student Registration Portal</p></body></html>"
          },
          {
            "name": "contact.html",
            "code": "<!DOCTYPE html><html><body><h3>Contact</h3><p>Email: student@college.edu | Hyderabad</p></body></html>"
          }
        ]
      },
      {
        "number": 2,
        "question": "Accept a number and define a PHP function to calculate its factorial using an iterative or recursive approach. Display the result.",
        "language": "PHP",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <form method=\"POST\">\n    Number: <input type=\"number\" name=\"n\" min=\"0\" required value=\"5\">\n    <input type=\"submit\" value=\"Factorial\">\n  </form>\n<?php\nfunction fact($n) {\n    return ($n <= 1) ? 1 : $n * fact($n - 1);\n}\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\") {\n    $n = (int)$_POST[\"n\"];\n    echo \"<h3>$n! = \" . fact($n) . \"</h3>\";\n}\n?>\n</body>\n</html>",
        "explanation": "Defines a compact recursive PHP factorial function.",
        "viva": [
          "What is recursion? — A function calling itself until reaching a defined base case."
        ]
      }
    ]
  },
  {
    "set": 6,
    "questions": [
      {
        "number": 1,
        "question": "Create Top, Left, Center and Bottom frames. Place a logo/title at the top, navigation links on the left, copyright information at the bottom and load linked pages in the center.",
        "language": "HTML",
        "code": "<!DOCTYPE html>\n<html>\n<head>\n  <title>Frame Layout</title>\n  <style>\n    body { margin:0; display:grid; grid-template-rows:60px 1fr 30px; grid-template-columns:160px 1fr; height:100vh; font-family:sans-serif; }\n    header { grid-column:1/-1; background:#1e3a8a; color:white; padding:15px; }\n    nav { background:#eee; padding:15px; }\n    nav a { display:block; margin-bottom:8px; text-decoration:none; color:#333; font-weight:bold; }\n    iframe { width:100%; height:100%; border:none; }\n    footer { grid-column:1/-1; background:#222; color:white; text-align:center; padding:6px; font-size:12px; }\n  </style>\n</head>\n<body>\n  <header><h3>College Web Portal</h3></header>\n  <nav>\n    <a href=\"center.html\" target=\"center\">Home</a>\n    <a href=\"courses.html\" target=\"center\">Courses</a>\n  </nav>\n  <iframe name=\"center\" src=\"center.html\"></iframe>\n  <footer>&copy; 2026 College. All rights reserved.</footer>\n</body>\n</html>",
        "explanation": "Simple modern CSS Grid frame layout with Top, Left, Center iframe, and Bottom footer.",
        "viva": [
          "Why use CSS Grid instead of obsolete <frameset>? — HTML5 deprecated <frameset>; CSS grid provides responsive frame layouts."
        ],
        "files": [
          {
            "name": "frames.html",
            "code": "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    body{display:grid;grid-template-rows:60px 1fr 30px;grid-template-columns:160px 1fr;height:100vh;margin:0;}\n    header{grid-column:1/-1;background:#2c3e50;color:white;padding:15px;}\n    nav{background:#eee;padding:15px;}\n    iframe{width:100%;height:100%;border:none;}\n    footer{grid-column:1/-1;background:#333;color:white;text-align:center;padding:5px;}\n  </style>\n</head>\n<body>\n  <header><h3>Portal Header</h3></header>\n  <nav><a href=\"center.html\" target=\"center\">Home</a><br><br><a href=\"courses.html\" target=\"center\">Courses</a></nav>\n  <iframe name=\"center\" src=\"center.html\"></iframe>\n  <footer>&copy; 2026 College</footer>\n</body>\n</html>"
          },
          {
            "name": "center.html",
            "code": "<!DOCTYPE html><html><body><h2>Welcome</h2><p>This is the center frame.</p></body></html>"
          },
          {
            "name": "courses.html",
            "code": "<!DOCTYPE html><html><body><h2>Courses</h2><ul><li>Web Tech</li><li>DBMS</li><li>OS</li></ul></body></html>"
          }
        ]
      },
      {
        "number": 2,
        "question": "Declare an array and display its elements. Insert a new element, delete an element, sort the array and display the modified array using PHP array functions.",
        "language": "PHP",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n<?php\n$arr = [\"Java\", \"Python\", \"C++\"];\necho \"Initial: \" . implode(\", \", $arr) . \"<br>\";\n\n$arr[] = \"PHP\"; // Insert\necho \"After Insert: \" . implode(\", \", $arr) . \"<br>\";\n\nunset($arr[1]); // Delete Python (index 1)\n$arr = array_values($arr);\necho \"After Delete: \" . implode(\", \", $arr) . \"<br>\";\n\nsort($arr); // Sort\necho \"After Sort: \" . implode(\", \", $arr) . \"<br>\";\n?>\n</body>\n</html>",
        "explanation": "Uses $arr[] to insert, unset() to delete, array_values() to reindex, and sort() to order.",
        "viva": [
          "What does implode() do? — Joins array elements into a single string with a separator."
        ]
      }
    ]
  },
  {
    "set": 7,
    "questions": [
      {
        "number": 1,
        "question": "Create an image gallery with thumbnail images. When a thumbnail is clicked, display its larger version and a caption in a designated area.",
        "language": "HTML",
        "code": "<!DOCTYPE html>\n<html>\n<head><title>Thumbnail Gallery</title></head>\n<body>\n  <h2>Image Gallery</h2>\n  <div>\n    <img id=\"main\" src=\"https://picsum.photos/id/1018/400/250\" alt=\"Campus\" width=\"400\" height=\"250\"><br>\n    <strong id=\"caption\">Campus View</strong>\n  </div>\n  <br>\n  <div>\n    <img src=\"https://picsum.photos/id/1018/100/60\" alt=\"Campus View\" onclick=\"show(this)\" style=\"cursor:pointer;\">\n    <img src=\"https://picsum.photos/id/1015/100/60\" alt=\"Garden View\" onclick=\"show(this)\" style=\"cursor:pointer;\">\n    <img src=\"https://picsum.photos/id/1019/100/60\" alt=\"Tech Block\" onclick=\"show(this)\" style=\"cursor:pointer;\">\n  </div>\n  <script>\n    function show(thumb) {\n      document.getElementById('main').src = thumb.src.replace('100/60', '400/250');\n      document.getElementById('caption').textContent = thumb.alt;\n    }\n  </script>\n</body>\n</html>",
        "explanation": "Single JavaScript onclick handler switching image source and caption dynamically.",
        "viva": [
          "What is the this keyword in onclick? — References the clicked HTML image element."
        ]
      },
      {
        "number": 2,
        "question": "Create a login form with username and password fields. Validate the submitted credentials in PHP and display a success or failure message.",
        "language": "PHP",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>User Login</h2>\n  <form method=\"POST\">\n    User: <input type=\"text\" name=\"user\" required><br><br>\n    Pass: <input type=\"password\" name=\"pass\" required><br><br>\n    <input type=\"submit\" value=\"Login\">\n  </form>\n<?php\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\") {\n    if ($_POST[\"user\"] === \"admin\" && $_POST[\"pass\"] === \"1234\") {\n        echo \"<h3 style='color:green;'>Login Successful!</h3>\";\n    } else {\n        echo \"<h3 style='color:red;'>Invalid credentials!</h3>\";\n    }\n}\n?>\n</body>\n</html>",
        "explanation": "Compares submitted username and password against valid credentials.",
        "viva": [
          "Why use POST for login? — Keeps sensitive passwords out of the URL."
        ]
      }
    ]
  },
  {
    "set": 8,
    "questions": [
      {
        "number": 1,
        "question": "Create a webpage containing audio and video players with controls. Provide links or selection options to display different media items.",
        "language": "HTML",
        "code": "<!DOCTYPE html>\n<html>\n<head><title>Audio & Video</title></head>\n<body>\n  <h2>HTML5 Media Players</h2>\n  <h3>Video Player</h3>\n  <video id=\"v\" width=\"360\" controls src=\"https://www.w3schools.com/html/mov_bbb.mp4\"></video><br>\n  <button onclick=\"v.src='https://www.w3schools.com/html/mov_bbb.mp4';v.play();\">Video 1</button>\n  <button onclick=\"v.src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';v.play();\">Video 2</button>\n\n  <h3>Audio Player</h3>\n  <audio id=\"a\" controls src=\"https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3\"></audio><br>\n  <button onclick=\"a.src='https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3';a.play();\">Audio 1</button>\n  <button onclick=\"a.src='https://www.w3schools.com/html/horse.mp3';a.play();\">Audio 2</button>\n</body>\n</html>",
        "explanation": "Uses HTML5 <video controls> and <audio controls> with simple src change functions.",
        "viva": [
          "What does controls attribute do? — Enables play/pause, volume, and seeker UI."
        ]
      },
      {
        "number": 2,
        "question": "Create a student registration form and use PHP with mysqli or PDO to connect to MySQL and insert the submitted student details.",
        "language": "PHP",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Student Registration</h2>\n  <form method=\"POST\">\n    Roll: <input type=\"text\" name=\"roll\" required><br><br>\n    Name: <input type=\"text\" name=\"name\" required><br><br>\n    <input type=\"submit\" name=\"save\" value=\"Register\">\n  </form>\n<?php\nif (isset($_POST['save'])) {\n    $c = new mysqli(\"localhost\", \"root\", \"\", \"college\");\n    if ($c->connect_error) die(\"DB Error\");\n    $stmt = $c->prepare(\"INSERT INTO students (roll, name) VALUES (?, ?)\");\n    $stmt->bind_param(\"ss\", $_POST['roll'], $_POST['name']);\n    echo $stmt->execute() ? \"<p style='color:green;'>Registered!</p>\" : \"<p>Failed</p>\";\n    $c->close();\n}\n?>\n</body>\n</html>",
        "explanation": "Connects via mysqli and inserts record using prepared statements.",
        "viva": [
          "Why use prepared statements? — Prevents SQL injection attacks."
        ]
      }
    ]
  },
  {
    "set": 9,
    "questions": [
      {
        "number": 1,
        "question": "Use the HTML5 Canvas element and JavaScript to draw a rectangle, circle, line and other geometric shapes with different colours and borders.",
        "language": "JavaScript",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>HTML5 Canvas Shapes</h2>\n  <canvas id=\"c\" width=\"350\" height=\"200\" style=\"border:1px solid #333;\"></canvas>\n  <script>\n    const ctx = document.getElementById(\"c\").getContext(\"2d\");\n\n    // 1. Rectangle\n    ctx.fillStyle = \"#3b82f6\";\n    ctx.fillRect(20, 20, 90, 50);\n\n    // 2. Circle\n    ctx.beginPath();\n    ctx.arc(180, 45, 25, 0, 2 * Math.PI);\n    ctx.fillStyle = \"#10b981\";\n    ctx.fill();\n\n    // 3. Line\n    ctx.beginPath();\n    ctx.moveTo(240, 20);\n    ctx.lineTo(320, 70);\n    ctx.strokeStyle = \"#ef4444\";\n    ctx.lineWidth = 3;\n    ctx.stroke();\n\n    // 4. Triangle\n    ctx.beginPath();\n    ctx.moveTo(60, 110);\n    ctx.lineTo(20, 180);\n    ctx.lineTo(100, 180);\n    ctx.closePath();\n    ctx.fillStyle = \"#f59e0b\";\n    ctx.fill();\n  </script>\n</body>\n</html>",
        "explanation": "Draws rectangle (fillRect), circle (arc), line (lineTo), and triangle on canvas 2D context.",
        "viva": [
          "What does getContext('2d') do? — Obtains the 2D rendering API object for the canvas."
        ]
      },
      {
        "number": 2,
        "question": "Connect PHP to a MySQL database, retrieve all student records using SELECT and display them in an HTML table.",
        "language": "PHP",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Student List</h2>\n<?php\n$c = new mysqli(\"localhost\", \"root\", \"\", \"college\");\nif ($c->connect_error) die(\"DB Error\");\n\n$res = $c->query(\"SELECT id, roll, name FROM students\");\necho \"<table border='1' cellpadding='6'><tr><th>ID</th><th>Roll</th><th>Name</th></tr>\";\nwhile ($r = $res->fetch_assoc()) {\n    echo \"<tr><td>{$r['id']}</td><td>{$r['roll']}</td><td>{$r['name']}</td></tr>\";\n}\necho \"</table>\";\n$c->close();\n?>\n</body>\n</html>",
        "explanation": "Executes SQL SELECT and loops through fetch_assoc() to print table rows.",
        "viva": [
          "What does fetch_assoc() return? — An associative array row of column names to values."
        ]
      }
    ]
  },
  {
    "set": 10,
    "questions": [
      {
        "number": 1,
        "question": "Create a book catalogue using an HTML table. Display cover image, book title, author, publisher, price and an Add to Cart button.",
        "language": "HTML",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Book Catalogue</h2>\n  <table border=\"1\" cellpadding=\"8\" style=\"border-collapse:collapse;\">\n    <tr><th>Cover</th><th>Title</th><th>Author</th><th>Publisher</th><th>Price</th><th>Action</th></tr>\n    <tr>\n      <td><img src=\"https://via.placeholder.com/40x50\" alt=\"Book\"></td>\n      <td>Web Technologies</td><td>Jeffrey Jackson</td><td>Pearson</td><td>&#8377; 550</td>\n      <td><button onclick=\"alert('Added to Cart!')\">Add to Cart</button></td>\n    </tr>\n    <tr>\n      <td><img src=\"https://via.placeholder.com/40x50\" alt=\"Book\"></td>\n      <td>JavaScript Guide</td><td>David Flanagan</td><td>O'Reilly</td><td>&#8377; 750</td>\n      <td><button onclick=\"alert('Added to Cart!')\">Add to Cart</button></td>\n    </tr>\n  </table>\n</body>\n</html>",
        "explanation": "Clean HTML table listing books with cover thumbnails, details, and Add to Cart button.",
        "viva": [
          "What is &#8377;? — HTML entity for the Indian Rupee (₹) symbol."
        ]
      },
      {
        "number": 2,
        "question": "Create a PHP interface to select a student by ID and perform UPDATE and DELETE operations on the corresponding MySQL record.",
        "language": "PHP",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Update / Delete Student</h2>\n  <form method=\"POST\">\n    ID: <input type=\"number\" name=\"id\" required><br><br>\n    New Name: <input type=\"text\" name=\"name\"><br><br>\n    <input type=\"submit\" name=\"act\" value=\"Update\">\n    <input type=\"submit\" name=\"act\" value=\"Delete\">\n  </form>\n<?php\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\") {\n    $c = new mysqli(\"localhost\", \"root\", \"\", \"college\");\n    $id = (int)$_POST[\"id\"];\n    if ($_POST[\"act\"] === \"Update\") {\n        $stmt = $c->prepare(\"UPDATE students SET name=? WHERE id=?\");\n        $stmt->bind_param(\"si\", $_POST[\"name\"], $id);\n        $stmt->execute();\n        echo \"Updated record $id\";\n    } elseif ($_POST[\"act\"] === \"Delete\") {\n        $stmt = $c->prepare(\"DELETE FROM students WHERE id=?\");\n        $stmt->bind_param(\"i\", $id);\n        $stmt->execute();\n        echo \"Deleted record $id\";\n    }\n    $c->close();\n}\n?>\n</body>\n</html>",
        "explanation": "Handles both UPDATE and DELETE via parameterized MySQL queries.",
        "viva": [
          "Why is WHERE clause mandatory in UPDATE and DELETE? — Without WHERE, every record in the table gets modified/deleted."
        ]
      }
    ]
  },
  {
    "set": 11,
    "questions": [
      {
        "number": 1,
        "question": "Create a webpage demonstrating all three CSS methods. Apply inline styles to headings, internal styles to images and external styles to buttons, including a hover effect.",
        "language": "CSS / HTML",
        "code": "<!DOCTYPE html>\n<html>\n<head>\n  <title>Three CSS Methods</title>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n  <style>\n    /* 2. Internal CSS */\n    img { border: 2px solid #2563eb; border-radius: 8px; }\n  </style>\n</head>\n<body>\n  <!-- 1. Inline CSS -->\n  <h2 style=\"color:#1e3a8a; text-decoration:underline;\">1. Inline Styled Heading</h2>\n\n  <h3>2. Internal Styled Image:</h3>\n  <img src=\"https://via.placeholder.com/200x100\" alt=\"Demo\">\n\n  <h3>3. External Styled Button:</h3>\n  <button class=\"mybtn\">Hover Button</button>\n</body>\n</html>",
        "explanation": "Applies inline CSS on heading, internal <style> on image, and external styles.css on button with :hover.",
        "viva": [
          "What is the priority of the three CSS methods? — Inline (highest) > Internal / External > Browser defaults."
        ],
        "files": [
          {
            "name": "index.html",
            "code": "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n  <style>img { border: 2px solid #2563eb; border-radius: 8px; }</style>\n</head>\n<body>\n  <h2 style=\"color:#1e3a8a; text-decoration:underline;\">Inline Heading</h2>\n  <img src=\"https://via.placeholder.com/200x100\" alt=\"Demo\"><br><br>\n  <button class=\"mybtn\">External Button</button>\n</body>\n</html>"
          },
          {
            "name": "styles.css",
            "code": ".mybtn { background:#2563eb; color:white; padding:8px 16px; border:none; cursor:pointer; }\n.mybtn:hover { background:#1e40af; }"
          }
        ]
      },
      {
        "number": 2,
        "question": "Develop a PHP login system that creates a session after successful authentication, protects the home page and destroys the session on logout.",
        "language": "PHP",
        "code": "<?php\nsession_start();\nif (isset($_GET['logout'])) {\n    session_destroy();\n    header(\"Location: ?\");\n    exit();\n}\nif (isset($_POST['login']) && $_POST['user'] === 'admin' && $_POST['pass'] === '1234') {\n    $_SESSION['user'] = $_POST['user'];\n}\n?>\n<!DOCTYPE html>\n<html>\n<body>\n<?php if (!isset($_SESSION['user'])): ?>\n  <h2>Login Page</h2>\n  <form method=\"POST\">\n    User: <input type=\"text\" name=\"user\" required><br><br>\n    Pass: <input type=\"password\" name=\"pass\" required><br><br>\n    <input type=\"submit\" name=\"login\" value=\"Sign In\">\n  </form>\n<?php else: ?>\n  <h2>Welcome, <?= htmlspecialchars($_SESSION['user']) ?>!</h2>\n  <p>Protected dashboard content.</p>\n  <a href=\"?logout=1\">Log Out</a>\n<?php endif; ?>\n</body>\n</html>",
        "explanation": "Tracks authentication using $_SESSION['user'] and clears on logout via session_destroy().",
        "viva": [
          "What does session_destroy() do? — Destroys all registered session data on the server."
        ],
        "files": [
          {
            "name": "login.php",
            "code": "<?php\nsession_start();\nif ($_POST['user'] === 'admin' && $_POST['pass'] === '1234') {\n    $_SESSION['user'] = $_POST['user'];\n    header(\"Location: dashboard.php\");\n}\n?>\n<form method=\"POST\">\n  <input name=\"user\"> <input type=\"password\" name=\"pass\">\n  <input type=\"submit\" value=\"Login\">\n</form>"
          },
          {
            "name": "dashboard.php",
            "code": "<?php\nsession_start();\nif (!isset($_SESSION['user'])) header(\"Location: login.php\");\necho \"Welcome \" . $_SESSION['user'] . \" | <a href='logout.php'>Logout</a>\";\n?>"
          },
          {
            "name": "logout.php",
            "code": "<?php\nsession_start();\nsession_destroy();\nheader(\"Location: login.php\");\n?>"
          }
        ]
      }
    ]
  },
  {
    "set": 12,
    "questions": [
      {
        "number": 1,
        "question": "Design a profile card containing a photograph, name and description. Apply borders, shadows, colour changes and CSS hover transitions.",
        "language": "CSS / HTML",
        "code": "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .card {\n      width: 240px; padding: 20px; text-align: center; font-family: Arial;\n      border: 1px solid #ccc; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);\n      transition: transform 0.3s, background 0.3s;\n    }\n    .card:hover { transform: scale(1.05); background: #f0fdf4; }\n    .card img { width: 80px; height: 80px; border-radius: 50%; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <img src=\"https://via.placeholder.com/80\" alt=\"Photo\">\n    <h3>Rahul Verma</h3>\n    <p>Software Engineer passionate about Web Development and Cloud.</p>\n  </div>\n</body>\n</html>",
        "explanation": "Minimal profile card with rounded photo, border-radius, box-shadow, and CSS hover scale.",
        "viva": [
          "What does transform: scale(1.05) do? — Enlarges the card by 5% when hovered."
        ]
      },
      {
        "number": 2,
        "question": "Accept a user's name, store it in a cookie and read the cookie on a subsequent page visit to display a personalized greeting.",
        "language": "PHP",
        "code": "<?php\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\" && isset($_POST['name'])) {\n    setcookie(\"user\", $_POST['name'], time() + 3600, \"/\");\n    $_COOKIE['user'] = $_POST['name'];\n}\n?>\n<!DOCTYPE html>\n<html>\n<body>\n  <h2>Cookie Greeting</h2>\n  <?php if (isset($_COOKIE['user'])): ?>\n    <h3>Welcome back, <?= htmlspecialchars($_COOKIE['user']) ?>!</h3>\n  <?php endif; ?>\n  <form method=\"POST\">\n    Name: <input type=\"text\" name=\"name\" required>\n    <input type=\"submit\" value=\"Save Cookie\">\n  </form>\n</body>\n</html>",
        "explanation": "Stores user name with setcookie() and accesses it on reload via $_COOKIE['user'].",
        "viva": [
          "Why call setcookie() before HTML? — Cookies are sent via HTTP headers."
        ]
      }
    ]
  },
  {
    "set": 13,
    "questions": [
      {
        "number": 1,
        "question": "Create a horizontal navigation bar with Home, About, Services, Products and Contact links. Style its background, spacing, link states and hover effects.",
        "language": "CSS / HTML",
        "code": "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    nav { background: #1e3a8a; padding: 10px; }\n    nav a { color: white; text-decoration: none; padding: 10px 14px; font-weight: bold; }\n    nav a:hover { background: #3b82f6; border-radius: 4px; }\n    nav a.active { background: #0284c7; border-radius: 4px; }\n  </style>\n</head>\n<body>\n  <nav>\n    <a href=\"#\" class=\"active\">Home</a>\n    <a href=\"#\">About</a>\n    <a href=\"#\">Services</a>\n    <a href=\"#\">Products</a>\n    <a href=\"#\">Contact</a>\n  </nav>\n  <h2>Home Page Content</h2>\n</body>\n</html>",
        "explanation": "Clean horizontal navigation bar with padding, active class, and hover backgrounds.",
        "viva": [
          "How do inline links receive padding? — By default <a> is inline; padding applies horizontally directly."
        ]
      },
      {
        "number": 2,
        "question": "Create a feedback form for name, email and comments. Validate the input and store the feedback in a MySQL table using PHP.",
        "language": "PHP",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Feedback Form</h2>\n  <form method=\"POST\">\n    Name: <input type=\"text\" name=\"name\" required><br><br>\n    Email: <input type=\"email\" name=\"email\" required><br><br>\n    Comments:<br><textarea name=\"msg\" required></textarea><br><br>\n    <input type=\"submit\" name=\"send\" value=\"Submit Feedback\">\n  </form>\n<?php\nif (isset($_POST['send'])) {\n    $c = new mysqli(\"localhost\", \"root\", \"\", \"college\");\n    $stmt = $c->prepare(\"INSERT INTO feedback (name, email, comments) VALUES (?, ?, ?)\");\n    $stmt->bind_param(\"sss\", $_POST['name'], $_POST['email'], $_POST['msg']);\n    echo $stmt->execute() ? \"<p>Feedback saved!</p>\" : \"<p>Error</p>\";\n    $c->close();\n}\n?>\n</body>\n</html>",
        "explanation": "Feedback form validating and inserting into MySQL via prepared statements.",
        "viva": [
          "What does sss mean in bind_param? — Three string parameters."
        ]
      }
    ]
  },
  {
    "set": 14,
    "questions": [
      {
        "number": 1,
        "question": "Build a responsive page with header, navigation, content, sidebar and footer using CSS Flexbox. Adjust the layout for narrow screens.",
        "language": "CSS / HTML",
        "code": "<!DOCTYPE html>\n<html>\n<head>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <style>\n    body { margin:0; font-family:sans-serif; display:flex; flex-direction:column; min-height:100vh; }\n    header, footer { background:#1e3a8a; color:white; padding:15px; text-align:center; }\n    nav { background:#3b82f6; padding:10px; }\n    nav a { color:white; margin-right:15px; text-decoration:none; font-weight:bold; }\n    .main { display:flex; flex:1; gap:10px; padding:15px; }\n    article { flex:3; background:#f1f5f9; padding:15px; }\n    aside { flex:1; background:#e2e8f0; padding:15px; }\n    @media(max-width:600px) { .main { flex-direction:column; } }\n  </style>\n</head>\n<body>\n  <header><h3>Header</h3></header>\n  <nav><a href=\"#\">Home</a><a href=\"#\">About</a><a href=\"#\">Contact</a></nav>\n  <div class=\"main\">\n    <article><h2>Main Content</h2><p>Article body.</p></article>\n    <aside><h3>Sidebar</h3><p>Links.</p></aside>\n  </div>\n  <footer><p>&copy; 2026 Portal</p></footer>\n</body>\n</html>",
        "explanation": "Flexbox layout (header, nav, article flex:3, aside flex:1, footer) with mobile column query.",
        "viva": [
          "What does flex: 3 vs flex: 1 do? — Allots 3x more free space to article than aside."
        ]
      },
      {
        "number": 2,
        "question": "Create a PHP page to upload an image to the server. Provide a View button that displays the uploaded image on the webpage.",
        "language": "PHP",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Upload Image</h2>\n  <form method=\"POST\" enctype=\"multipart/form-data\">\n    Select: <input type=\"file\" name=\"pic\" required accept=\"image/*\">\n    <input type=\"submit\" value=\"Upload\">\n  </form>\n<?php\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\" && isset($_FILES[\"pic\"])) {\n    $target = \"uploads/\" . basename($_FILES[\"pic\"][\"name\"]);\n    if (!is_dir(\"uploads\")) mkdir(\"uploads\");\n    if (move_uploaded_file($_FILES[\"pic\"][\"tmp_name\"], $target)) {\n        echo \"<h3>Uploaded:</h3><img src='$target' width='200'>\";\n    }\n}\n?>\n</body>\n</html>",
        "explanation": "Handles multipart image upload and saves using move_uploaded_file().",
        "viva": [
          "Why is enctype='multipart/form-data' required? — Needed to send binary file payloads."
        ],
        "files": [
          {
            "name": "upload.html",
            "code": "<!-- upload.html -->\n<form action=\"upload.php\" method=\"POST\" enctype=\"multipart/form-data\">\n  <input type=\"file\" name=\"pic\" required><br><br>\n  <input type=\"submit\" value=\"Upload Image\">\n</form>"
          },
          {
            "name": "upload.php",
            "code": "<?php\nif (isset($_FILES['pic'])) {\n    $path = \"uploads/\" . $_FILES['pic']['name'];\n    if (!is_dir(\"uploads\")) mkdir(\"uploads\");\n    move_uploaded_file($_FILES['pic']['tmp_name'], $path);\n    echo \"<img src='$path' width='200'>\";\n}\n?>"
          }
        ]
      }
    ]
  },
  {
    "set": 15,
    "questions": [
      {
        "number": 1,
        "question": "Create a webpage using CSS Grid with header, navigation, main content, sidebar and footer. Demonstrate a responsive grid arrangement.",
        "language": "CSS / HTML",
        "code": "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    body { margin:0; font-family:sans-serif; min-height:100vh; }\n    .grid {\n      display:grid;\n      grid-template-areas: \"h h\" \"n n\" \"m s\" \"f f\";\n      grid-template-columns: 3fr 1fr;\n      gap: 10px; padding: 10px; height: 100vh; box-sizing: border-box;\n    }\n    header { grid-area:h; background:#1e3a8a; color:white; padding:10px; }\n    nav { grid-area:n; background:#2563eb; color:white; padding:8px; }\n    main { grid-area:m; background:#f1f5f9; padding:15px; }\n    aside { grid-area:s; background:#e2e8f0; padding:15px; }\n    footer { grid-area:f; background:#333; color:white; text-align:center; padding:8px; }\n    @media(max-width:600px){ .grid { grid-template-areas:\"h\" \"n\" \"m\" \"s\" \"f\"; grid-template-columns:1fr; } }\n  </style>\n</head>\n<body>\n  <div class=\"grid\">\n    <header><h3>Header</h3></header>\n    <nav>Nav Bar</nav>\n    <main><h3>Main Grid Content</h3></main>\n    <aside><h3>Sidebar</h3></aside>\n    <footer>Footer &copy; 2026</footer>\n  </div>\n</body>\n</html>",
        "explanation": "CSS Grid layout using grid-template-areas and mobile single-column breakpoint.",
        "viva": [
          "What does grid-area do? — Assigns a component to a named region in grid-template-areas."
        ]
      },
      {
        "number": 2,
        "question": "Create a PHP page to accept payment details and display the submitted details after processing. Maintain a session for 10 minutes and expire the payment page/session after the time limit.",
        "language": "PHP",
        "code": "<?php\nsession_start();\nif (!isset($_SESSION['time'])) $_SESSION['time'] = time();\n\nif (time() - $_SESSION['time'] > 600) {\n    session_destroy();\n    die(\"<h3>Session Expired (10 min timeout).</h3>\");\n}\n?>\n<!DOCTYPE html>\n<html>\n<body>\n  <h2>Payment Portal</h2>\n  <form method=\"POST\">\n    Amount (₹): <input type=\"number\" name=\"amt\" required value=\"500\"><br><br>\n    Card: <input type=\"text\" name=\"card\" required placeholder=\"XXXX-XXXX-XXXX\"><br><br>\n    <input type=\"submit\" value=\"Pay Now\">\n  </form>\n<?php\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\") {\n    echo \"<p style='color:green;'>Payment of ₹{$_POST['amt']} received!</p>\";\n}\n?>\n</body>\n</html>",
        "explanation": "Calculates time() - $_SESSION['time'] and terminates session if elapsed seconds > 600.",
        "viva": [
          "Why expire sessions in payments? — Prevents session hijacking and unauthorized re-use."
        ]
      }
    ]
  },
  {
    "set": 16,
    "questions": [
      {
        "number": 1,
        "question": "Create a login form with username and password fields and Login and Reset buttons. Use CSS for alignment, spacing, borders, focus effects and responsive sizing.",
        "language": "CSS / HTML",
        "code": "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    body { font-family:sans-serif; background:#f1f5f9; display:flex; justify-content:center; padding:50px; }\n    form { background:white; padding:25px; border-radius:8px; border:1px solid #ccc; width:280px; }\n    input { width:100%; padding:8px; margin:6px 0 15px; border:1px solid #ccc; border-radius:4px; box-sizing:border-box; }\n    input:focus { border-color:#2563eb; outline:none; box-shadow:0 0 5px rgba(37,99,235,0.4); }\n    button { padding:8px 14px; border:none; border-radius:4px; cursor:pointer; font-weight:bold; }\n    .btn-login { background:#2563eb; color:white; }\n    .btn-reset { background:#eee; color:#333; }\n  </style>\n</head>\n<body>\n  <form>\n    <h3>User Login</h3>\n    <label>Username</label><input type=\"text\" required>\n    <label>Password</label><input type=\"password\" required>\n    <button type=\"submit\" class=\"btn-login\">Login</button>\n    <button type=\"reset\" class=\"btn-reset\">Reset</button>\n  </form>\n</body>\n</html>",
        "explanation": "Centered login form styled with input:focus glow and flex alignment.",
        "viva": [
          "What does input:focus target? — The input field currently receiving keyboard focus."
        ]
      },
      {
        "number": 2,
        "question": "Accept a number from the user and use PHP loops to generate and display its multiplication table from 1 to 10.",
        "language": "PHP",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <form method=\"POST\">\n    Number: <input type=\"number\" name=\"n\" required value=\"5\">\n    <input type=\"submit\" value=\"Table\">\n  </form>\n<?php\nif (isset($_POST['n'])) {\n    $n = (int)$_POST['n'];\n    echo \"<h3>Table of $n:</h3>\";\n    for ($i = 1; $i <= 10; $i++) {\n        echo \"$n x $i = \" . ($n * $i) . \"<br>\";\n    }\n}\n?>\n</body>\n</html>",
        "explanation": "For loop from 1 to 10 printing $n x $i multiplication products.",
        "viva": [
          "What is the time complexity? — O(1) constant time (10 steps)."
        ]
      }
    ]
  },
  {
    "set": 17,
    "questions": [
      {
        "number": 1,
        "question": "Create a webpage with multiple paragraphs and apply different font families, sizes, weights, text colours, backgrounds, alignment, line-height, margins and padding.",
        "language": "CSS / HTML",
        "code": "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .p1 { font-family:Georgia, serif; font-size:16px; color:#1e3a8a; background:#eff6ff; line-height:1.6; padding:10px; margin-bottom:15px; }\n    .p2 { font-family:Consolas, monospace; font-size:14px; font-weight:bold; color:#065f46; background:#ecfdf5; text-align:justify; padding:10px; }\n  </style>\n</head>\n<body>\n  <h2>CSS Typography</h2>\n  <p class=\"p1\">Paragraph 1: Georgia serif, blue text, 1.6 line-height, and padding.</p>\n  <p class=\"p2\">Paragraph 2: Consolas monospace, green bold text, and justified alignment.</p>\n</body>\n</html>",
        "explanation": "Demonstrates font-family, font-size, font-weight, color, background, line-height, padding, and margin.",
        "viva": [
          "Difference between serif and sans-serif? — Serif fonts have decorative strokes at ends of letters; sans-serif fonts are plain."
        ]
      },
      {
        "number": 2,
        "question": "Create an associative array containing five products and their prices. Use a loop to display each product with its price.",
        "language": "JavaScript",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Product Prices</h2>\n  <ul id=\"list\"></ul>\n  <script>\n    const products = { \"Keyboard\": 1500, \"Mouse\": 600, \"Monitor\": 8500, \"Headphones\": 2000, \"USB Drive\": 450 };\n    let html = \"\";\n    for (const [item, price] of Object.entries(products)) {\n      html += `<li>${item} - &#8377; ${price}</li>`;\n    }\n    document.getElementById(\"list\").innerHTML = html;\n  </script>\n</body>\n</html>",
        "explanation": "Iterates over Object.entries() to display associative array key-value pairs.",
        "viva": [
          "What does Object.entries() return? — An array of [key, value] pairs."
        ]
      }
    ]
  },
  {
    "set": 18,
    "questions": [
      {
        "number": 1,
        "question": "Create webpage elements demonstrating static, relative, absolute and fixed positioning. Use suitable labels to identify each positioning method.",
        "language": "CSS / HTML",
        "code": "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .box { padding:10px; color:white; font-family:sans-serif; margin-bottom:10px; }\n    .static   { position:static; background:#64748b; }\n    .relative { position:relative; top:10px; left:20px; background:#2563eb; }\n    .parent   { position:relative; height:90px; background:#eee; border:1px dashed #aaa; }\n    .absolute { position:absolute; bottom:5px; right:10px; background:#dc2626; }\n    .fixed    { position:fixed; bottom:10px; left:10px; background:#16a34a; }\n  </style>\n</head>\n<body style=\"height:800px;\">\n  <h2>CSS Positioning</h2>\n  <div class=\"box static\">1. Static (Normal flow)</div>\n  <div class=\"box relative\">2. Relative (Offset 10px, 20px)</div>\n  <div class=\"parent\">\n    <div class=\"box absolute\">3. Absolute</div>\n  </div>\n  <div class=\"box fixed\">4. Fixed (Bottom Left)</div>\n</body>\n</html>",
        "explanation": "Demonstrates static, relative, absolute (inside relative parent), and fixed viewport positioning.",
        "viva": [
          "What is position: absolute relative to? — The nearest positioned ancestor (non-static)."
        ]
      },
      {
        "number": 2,
        "question": "Write a PHP script to read the contents of a text file and display the content on a webpage.",
        "language": "PHP",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Read File in PHP</h2>\n<?php\n$file = \"notes.txt\";\nif (!file_exists($file)) file_put_contents($file, \"Welcome to Web Tech Lab!\nPractice all sets.\");\n\nif (file_exists($file)) {\n    echo \"<pre>\" . htmlspecialchars(file_get_contents($file)) . \"</pre>\";\n} else {\n    echo \"File not found.\";\n}\n?>\n</body>\n</html>",
        "explanation": "Uses file_get_contents() to read local text file content and displays inside <pre>.",
        "viva": [
          "What does file_get_contents() do? — Reads an entire file into a string variable."
        ],
        "files": [
          {
            "name": "read_file.php",
            "code": "<?php\n$file = \"notes.txt\";\nif (file_exists($file)) {\n    echo \"<pre>\" . htmlspecialchars(file_get_contents($file)) . \"</pre>\";\n}\n?>"
          },
          {
            "name": "notes.txt",
            "code": "Web Technologies Lab Notes:\n1. HTML creates structure.\n2. CSS handles styling.\n3. JavaScript provides interactivity.\n4. PHP processes backend logic."
          }
        ]
      }
    ]
  },
  {
    "set": 19,
    "questions": [
      {
        "number": 1,
        "question": "Create a form and style it using element, class, ID, attribute and pseudo-class selectors. Apply distinct styles to labels, inputs and buttons.",
        "language": "CSS / HTML",
        "code": "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    /* Element */ form { max-width:280px; font-family:sans-serif; }\n    /* Class */   .field { margin-bottom:12px; }\n    /* ID */      #userForm { border:2px solid #2563eb; padding:15px; border-radius:6px; }\n    /* Attribute */ input[type=\"email\"] { border-left:4px solid #16a34a; }\n    /* Pseudo */  input:focus { outline:none; border-color:#2563eb; }\n    button:hover { background:#1e40af; cursor:pointer; }\n    input { width:100%; padding:6px; box-sizing:border-box; }\n    button { background:#2563eb; color:white; padding:8px; border:none; width:100%; font-weight:bold; }\n  </style>\n</head>\n<body>\n  <form id=\"userForm\">\n    <h3>Selectors Form</h3>\n    <div class=\"field\"><label>Name</label><input type=\"text\"></div>\n    <div class=\"field\"><label>Email</label><input type=\"email\"></div>\n    <button type=\"submit\">Submit</button>\n  </form>\n</body>\n</html>",
        "explanation": "Demonstrates element, class (.field), ID (#userForm), attribute ([type='email']), and pseudo-class (:focus, :hover).",
        "viva": [
          "What is CSS specificity? — Determines which rule wins when multiple selectors target the same element (ID > Class > Element)."
        ]
      },
      {
        "number": 2,
        "question": "Create a form to collect student name, roll number, course and email. Process the form using $_POST and display the submitted details.",
        "language": "PHP",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Student Form</h2>\n  <form method=\"POST\">\n    Name: <input name=\"name\" required><br><br>\n    Roll: <input name=\"roll\" required><br><br>\n    Course: <input name=\"course\" required><br><br>\n    Email: <input type=\"email\" name=\"email\" required><br><br>\n    <input type=\"submit\" value=\"Submit\">\n  </form>\n<?php\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\") {\n    echo \"<h3>Details:</h3>\";\n    echo \"Name: \" . htmlspecialchars($_POST['name']) . \"<br>\";\n    echo \"Roll: \" . htmlspecialchars($_POST['roll']) . \"<br>\";\n    echo \"Course: \" . htmlspecialchars($_POST['course']) . \"<br>\";\n    echo \"Email: \" . htmlspecialchars($_POST['email']) . \"<br>\";\n}\n?>\n</body>\n</html>",
        "explanation": "Collects 4 student attributes in POST form and echoes them safely.",
        "viva": [
          "Why use htmlspecialchars()? — Sanitizes special characters to prevent XSS."
        ]
      }
    ]
  },
  {
    "set": 20,
    "questions": [
      {
        "number": 1,
        "question": "Create a button with a hover transition and a page element that moves across the screen using a CSS keyframe animation.",
        "language": "CSS / HTML",
        "code": "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    /* 1. Button Hover Transition */\n    .btn {\n      background:#2563eb; color:white; padding:10px 20px; border:none; border-radius:6px;\n      font-weight:bold; cursor:pointer; transition:transform 0.3s, background 0.3s;\n    }\n    .btn:hover { background:#1e40af; transform:scale(1.1); }\n\n    /* 2. Keyframe Moving Element */\n    .box {\n      width:40px; height:40px; background:#dc2626; border-radius:4px;\n      position:relative; margin-top:30px;\n      animation: move 3s infinite alternate;\n    }\n    @keyframes move {\n      from { left:0px; }\n      to   { left:250px; }\n    }\n  </style>\n</head>\n<body>\n  <h2>CSS Transition & Animation</h2>\n  <button class=\"btn\">Hover Me</button>\n  <div class=\"box\"></div>\n</body>\n</html>",
        "explanation": "Button transition (scale, background) and @keyframes move animating box left:0 to left:250px.",
        "viva": [
          "What does infinite alternate do? — Runs the animation back and forth continuously."
        ]
      },
      {
        "number": 2,
        "question": "Create a login form and validate the username and password against records stored in a MySQL database. Display an appropriate message.",
        "language": "PHP",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>DB Login</h2>\n  <form method=\"POST\">\n    User: <input name=\"user\" required><br><br>\n    Pass: <input type=\"password\" name=\"pass\" required><br><br>\n    <input type=\"submit\" value=\"Sign In\">\n  </form>\n<?php\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\") {\n    $c = new mysqli(\"localhost\", \"root\", \"\", \"college\");\n    $stmt = $c->prepare(\"SELECT password FROM users WHERE username = ?\");\n    $stmt->bind_param(\"s\", $_POST['user']);\n    $stmt->execute();\n    $res = $stmt->get_result();\n    if ($row = $res->fetch_assoc()) {\n        echo ($row['password'] === $_POST['pass']) ? \"<h3 style='color:green;'>Login Success!</h3>\" : \"<h3>Wrong password</h3>\";\n    } else {\n        echo \"<h3>User not found</h3>\";\n    }\n    $c->close();\n}\n?>\n</body>\n</html>",
        "explanation": "Queries MySQL table users by username using prepared statement and validates password.",
        "viva": [
          "What does get_result() return? — The mysqli_result object allowing fetch_assoc() iteration."
        ]
      }
    ]
  },
  {
    "set": 21,
    "questions": [
      {
        "number": 1,
        "question": "Accept a number from the user and write a JavaScript function to calculate and display its factorial. Validate negative and invalid input.",
        "language": "JavaScript",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Factorial Calculator</h2>\n  Number: <input type=\"number\" id=\"n\" value=\"5\">\n  <button onclick=\"calc()\">Calculate</button>\n  <p id=\"res\" style=\"font-weight:bold;\"></p>\n  <script>\n    function calc() {\n      const v = document.getElementById(\"n\").value;\n      const res = document.getElementById(\"res\");\n      if (v === \"\" || isNaN(v)) { res.textContent = \"Enter a valid number.\"; return; }\n      const n = Number(v);\n      if (n < 0 || !Number.isInteger(n)) { res.textContent = \"Enter a non-negative integer.\"; return; }\n      let f = 1;\n      for (let i = 1; i <= n; i++) f *= i;\n      res.textContent = `${n}! = ${f}`;\n    }\n    calc();\n  </script>\n</body>\n</html>",
        "explanation": "Validates non-negative integer and computes factorial via loop.",
        "viva": [
          "What is 0! equal to? — 1."
        ]
      },
      {
        "number": 2,
        "question": "Develop a PHP application that authenticates a user, displays profile information, allows the user to edit details and terminates the session on logout.",
        "language": "PHP",
        "code": "<?php\nsession_start();\nif (isset($_GET['logout'])) { session_destroy(); header(\"Location: ?\"); exit(); }\nif (!isset($_SESSION['user']) && isset($_POST['login'])) {\n    if ($_POST['u'] === 'student' && $_POST['p'] === '123') { $_SESSION['user'] = 'student'; $_SESSION['name'] = 'Rahul'; }\n}\nif (isset($_SESSION['user']) && isset($_POST['save'])) { $_SESSION['name'] = $_POST['name']; }\n?>\n<!DOCTYPE html><html><body>\n<?php if (!isset($_SESSION['user'])): ?>\n  <form method=\"POST\">\n    User: <input name=\"u\" value=\"student\"> Pass: <input name=\"p\" value=\"123\">\n    <input type=\"submit\" name=\"login\" value=\"Login\">\n  </form>\n<?php else: ?>\n  <h2>Welcome, <?= $_SESSION['user'] ?></h2>\n  <form method=\"POST\">\n    Name: <input name=\"name\" value=\"<?= htmlspecialchars($_SESSION['name']) ?>\">\n    <input type=\"submit\" name=\"save\" value=\"Update Profile\">\n  </form>\n  <br><a href=\"?logout=1\">Logout</a>\n<?php endif; ?>\n</body></html>",
        "explanation": "Demonstrates session-backed profile storage, profile updates, and logout.",
        "viva": [
          "How is session ID tracked? — In the browser's PHPSESSID cookie."
        ]
      }
    ]
  },
  {
    "set": 22,
    "questions": [
      {
        "number": 1,
        "question": "Accept a limit from the user and display the Fibonacci series up to that limit using JavaScript loops and functions.",
        "language": "JavaScript",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Fibonacci Series</h2>\n  Limit: <input type=\"number\" id=\"lim\" value=\"50\">\n  <button onclick=\"fib()\">Generate</button>\n  <p id=\"out\" style=\"font-weight:bold;\"></p>\n  <script>\n    function fib() {\n      const max = Number(document.getElementById(\"lim\").value);\n      let a = 0, b = 1, terms = [];\n      while (a <= max) {\n        terms.push(a);\n        let next = a + b; a = b; b = next;\n      }\n      document.getElementById(\"out\").textContent = terms.join(\", \");\n    }\n    fib();\n  </script>\n</body>\n</html>",
        "explanation": "Generates Fibonacci numbers up to limit using while loop.",
        "viva": [
          "Formula for Fibonacci? — F(n) = F(n-1) + F(n-2)."
        ]
      },
      {
        "number": 2,
        "question": "Create an array of numbers or names. Display the array, sort its elements and search for a value entered by the user.",
        "language": "JavaScript",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Array Sort & Search</h2>\n  <p id=\"disp\"></p>\n  <button onclick=\"sortArr()\">Sort Alphabetically</button><br><br>\n  Search: <input type=\"text\" id=\"srch\">\n  <button onclick=\"findItem()\">Search</button>\n  <p id=\"msg\"></p>\n  <script>\n    let arr = [\"Sita\", \"Ram\", \"Anil\", \"Bala\", \"Gita\"];\n    function show() { document.getElementById(\"disp\").textContent = \"Array: \" + arr.join(\", \"); }\n    function sortArr() { arr.sort(); show(); }\n    function findItem() {\n      const q = document.getElementById(\"srch\").value.trim();\n      const idx = arr.indexOf(q);\n      document.getElementById(\"msg\").textContent = (idx !== -1) ? `Found at index ${idx}` : \"Not found\";\n    }\n    show();\n  </script>\n</body>\n</html>",
        "explanation": "Uses array.sort() and array.indexOf() to display, sort, and search.",
        "viva": [
          "What does indexOf() return on failure? — -1."
        ]
      }
    ]
  },
  {
    "set": 23,
    "questions": [
      {
        "number": 1,
        "question": "Accept a positive integer and display all prime numbers up to that number using JavaScript conditional statements and loops.",
        "language": "JavaScript",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Primes up to N</h2>\n  Limit: <input type=\"number\" id=\"num\" value=\"30\">\n  <button onclick=\"findPrimes()\">Find Primes</button>\n  <p id=\"res\" style=\"font-weight:bold;\"></p>\n  <script>\n    function isPrime(n) {\n      if (n < 2) return false;\n      for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;\n      return true;\n    }\n    function findPrimes() {\n      const max = Number(document.getElementById(\"num\").value);\n      const primes = [];\n      for (let i = 2; i <= max; i++) if (isPrime(i)) primes.push(i);\n      document.getElementById(\"res\").textContent = primes.join(\", \");\n    }\n    findPrimes();\n  </script>\n</body>\n</html>",
        "explanation": "Tests each number up to limit using helper isPrime(n).",
        "viva": [
          "Smallest prime number? — 2."
        ]
      },
      {
        "number": 2,
        "question": "Create a registration form and validate required fields in PHP before storing or displaying the submitted information.",
        "language": "PHP",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Register Form</h2>\n  <form method=\"POST\">\n    Name: <input name=\"name\"><br><br>\n    Email: <input name=\"email\"><br><br>\n    <input type=\"submit\" value=\"Register\">\n  </form>\n<?php\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\") {\n    $name = trim($_POST['name'] ?? '');\n    $email = trim($_POST['email'] ?? '');\n    if (empty($name) || empty($email)) {\n        echo \"<p style='color:red;'>All fields required!</p>\";\n    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {\n        echo \"<p style='color:red;'>Invalid email!</p>\";\n    } else {\n        echo \"<p style='color:green;'>Valid: $name ($email)</p>\";\n    }\n}\n?>\n</body>\n</html>",
        "explanation": "Validates non-empty fields and email format via filter_var().",
        "viva": [
          "Function for email validation in PHP? — filter_var($email, FILTER_VALIDATE_EMAIL)."
        ]
      }
    ]
  },
  {
    "set": 24,
    "questions": [
      {
        "number": 1,
        "question": "Accept a number and use JavaScript to determine whether it is a palindrome. Display the result in the webpage without reloading.",
        "language": "JavaScript",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Palindrome Checker</h2>\n  Input: <input type=\"text\" id=\"str\" value=\"12321\">\n  <button onclick=\"checkPal()\">Check</button>\n  <p id=\"ans\" style=\"font-weight:bold;\"></p>\n  <script>\n    function checkPal() {\n      const val = document.getElementById(\"str\").value.trim();\n      const rev = val.split(\"\").reverse().join(\"\");\n      document.getElementById(\"ans\").textContent = (val === rev) ? `\"${val}\" is a PALINDROME!` : `\"${val}\" is NOT a palindrome.`;\n    }\n    checkPal();\n  </script>\n</body>\n</html>",
        "explanation": "Compares string to split('').reverse().join('').",
        "viva": [
          "Definition of palindrome? — Reads the same backwards as forward."
        ]
      },
      {
        "number": 2,
        "question": "Retrieve feedback records from a MySQL table using PHP and display the name, email and comments in an HTML table.",
        "language": "PHP",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Feedback Entries</h2>\n<?php\n$c = new mysqli(\"localhost\", \"root\", \"\", \"college\");\n$res = $c->query(\"SELECT name, email, comments FROM feedback\");\necho \"<table border='1' cellpadding='6'><tr><th>Name</th><th>Email</th><th>Comments</th></tr>\";\nwhile ($r = $res->fetch_assoc()) {\n    echo \"<tr><td>{$r['name']}</td><td>{$r['email']}</td><td>{$r['comments']}</td></tr>\";\n}\necho \"</table>\";\n$c->close();\n?>\n</body>\n</html>",
        "explanation": "Renders SQL query results into a simple border='1' table.",
        "viva": [
          "What is the return type of query()? — mysqli_result object on success."
        ]
      }
    ]
  },
  {
    "set": 25,
    "questions": [
      {
        "number": 1,
        "question": "Create a textbox and four buttons named Factorial, Fibonacci, Prime and Palindrome. Each button must call its respective JavaScript function and display the result.",
        "language": "JavaScript",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Number Utility</h2>\n  <input type=\"number\" id=\"v\" value=\"5\">\n  <button onclick=\"fFact()\">Factorial</button>\n  <button onclick=\"fFibo()\">Fibonacci</button>\n  <button onclick=\"fPrime()\">Prime</button>\n  <button onclick=\"fPal()\">Palindrome</button>\n  <h3 id=\"res\"></h3>\n  <script>\n    const get = () => Number(document.getElementById(\"v\").value);\n    function fFact() {\n      let n = get(), f = 1;\n      for (let i = 1; i <= n; i++) f *= i;\n      res.textContent = `Factorial: ${f}`;\n    }\n    function fFibo() {\n      let n = get(), a = 0, b = 1, t = [];\n      while (a <= n) { t.push(a); let next = a + b; a = b; b = next; }\n      res.textContent = `Fibonacci: ${t.join(', ')}`;\n    }\n    function fPrime() {\n      let n = get(), p = n > 1;\n      for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) { p = false; break; }\n      res.textContent = p ? `${n} is Prime` : `${n} is NOT Prime`;\n    }\n    function fPal() {\n      let s = String(get());\n      res.textContent = (s === s.split('').reverse().join('')) ? \"Palindrome\" : \"Not Palindrome\";\n    }\n  </script>\n</body>\n</html>",
        "explanation": "Textbox with 4 distinct button callbacks updating a shared h3 result.",
        "viva": [
          "Why is modular function structure useful? — Each button has a clean dedicated logic."
        ]
      },
      {
        "number": 2,
        "question": "Create an AngularJS application with a controller and a message variable. Display the message in the view using {{message}}.",
        "language": "AngularJS",
        "code": "<!DOCTYPE html>\n<html ng-app=\"app\">\n<head>\n  <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js\"></script>\n</head>\n<body ng-controller=\"Ctrl\">\n  <h2>AngularJS Message</h2>\n  <h3>{{ message }}</h3>\n  <input type=\"text\" ng-model=\"message\">\n  <script>\n    angular.module(\"app\", []).controller(\"Ctrl\", function($scope) {\n      $scope.message = \"Hello from AngularJS Controller!\";\n    });\n  </script>\n</body>\n</html>",
        "explanation": "AngularJS app displaying $scope.message via interpolation {{ message }}.",
        "viva": [
          "What is $scope? — Binds model variables between Controller and View."
        ]
      }
    ]
  },
  {
    "set": 26,
    "questions": [
      {
        "number": 1,
        "question": "Validate name, email and password fields using JavaScript. Check that fields are not empty, email is valid and password meets specified length and character requirements.",
        "language": "JavaScript",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Form Validation</h2>\n  <form onsubmit=\"return validate()\">\n    Name: <input id=\"name\"><br><br>\n    Email: <input id=\"email\"><br><br>\n    Password (Min 8): <input type=\"password\" id=\"pass\"><br><br>\n    <input type=\"submit\" value=\"Submit\">\n  </form>\n  <p id=\"err\" style=\"color:red;\"></p>\n  <script>\n    function validate() {\n      const name = document.getElementById(\"name\").value.trim();\n      const email = document.getElementById(\"email\").value.trim();\n      const pass = document.getElementById(\"pass\").value;\n      const err = document.getElementById(\"err\");\n\n      if (!name) { err.textContent = \"Name cannot be empty.\"; return false; }\n      if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) { err.textContent = \"Invalid email format.\"; return false; }\n      if (pass.length < 8) { err.textContent = \"Password must be at least 8 characters.\"; return false; }\n\n      alert(\"Form submitted successfully!\");\n      return true;\n    }\n  </script>\n</body>\n</html>",
        "explanation": "Simple client-side form validation checking non-empty name, email regex, and password length.",
        "viva": [
          "What does return false do in onsubmit? — Prevents form from submitting when invalid."
        ]
      },
      {
        "number": 2,
        "question": "Accept two numbers using ng-model and display addition, subtraction, multiplication and division using AngularJS expressions.",
        "language": "AngularJS",
        "code": "<!DOCTYPE html>\n<html ng-app>\n<head>\n  <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js\"></script>\n</head>\n<body ng-init=\"a=10; b=5;\">\n  <h2>AngularJS Calculator</h2>\n  Number 1: <input type=\"number\" ng-model=\"a\"><br><br>\n  Number 2: <input type=\"number\" ng-model=\"b\"><br><br>\n  <p>Add: {{ a + b }}</p>\n  <p>Subtract: {{ a - b }}</p>\n  <p>Multiply: {{ a * b }}</p>\n  <p>Divide: {{ b !== 0 ? (a / b) : 'Cannot divide by 0' }}</p>\n</body>\n</html>",
        "explanation": "Uses ng-model and evaluates live arithmetic expressions: {{ a + b }}, {{ a - b }}, etc.",
        "viva": [
          "What is ng-model? — Binds HTML form controls to application scope data."
        ]
      }
    ]
  },
  {
    "set": 27,
    "questions": [
      {
        "number": 1,
        "question": "Create a registration form and use regular expressions to validate a name containing only letters, a valid email and a password containing required character types.",
        "language": "HTML",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>RegEx Validation Form</h2>\n  <form onsubmit=\"return check()\">\n    Name (Letters): <input id=\"nm\"><br><br>\n    Email: <input id=\"em\"><br><br>\n    Password (Min 8, 1 Uppercase, 1 Digit): <input type=\"password\" id=\"pw\"><br><br>\n    <input type=\"submit\" value=\"Register\">\n  </form>\n  <p id=\"msg\" style=\"color:red;\"></p>\n  <script>\n    function check() {\n      const nm = document.getElementById(\"nm\").value;\n      const em = document.getElementById(\"em\").value;\n      const pw = document.getElementById(\"pw\").value;\n      const msg = document.getElementById(\"msg\");\n\n      if (!/^[A-Za-z\\s]+$/.test(nm)) { msg.textContent = \"Name must contain letters only.\"; return false; }\n      if (!/^[\\w.-]+@[\\w.-]+\\.[A-Za-z]{2,}$/.test(em)) { msg.textContent = \"Invalid email format.\"; return false; }\n      if (!/^(?=.*[A-Z])(?=.*\\d).{8,}$/.test(pw)) { msg.textContent = \"Password: min 8 chars with 1 uppercase & 1 digit.\"; return false; }\n\n      alert(\"All fields valid!\");\n      return true;\n    }\n  </script>\n</body>\n</html>",
        "explanation": "Uses JavaScript RegExp.test() with regex patterns for name, email, and password.",
        "viva": [
          "What does ^[A-Za-z\\s]+$ mean? — String contains only uppercase/lowercase letters and spaces."
        ]
      },
      {
        "number": 2,
        "question": "Create a form with name and course fields using ng-model. Display the entered values immediately in another section of the same page.",
        "language": "AngularJS",
        "code": "<!DOCTYPE html>\n<html ng-app>\n<head>\n  <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js\"></script>\n</head>\n<body>\n  <h2>Student Entry</h2>\n  Name: <input type=\"text\" ng-model=\"name\"><br><br>\n  Course: <input type=\"text\" ng-model=\"course\"><br><br>\n  <hr>\n  <h3>Live Preview:</h3>\n  <p>Student Name: <strong>{{ name }}</strong></p>\n  <p>Enrolled Course: <strong>{{ course }}</strong></p>\n</body>\n</html>",
        "explanation": "Two-way binding rendering {{ name }} and {{ course }} synchronously as the user types.",
        "viva": [
          "What is two-way binding? — Auto-synchronization between Model and View."
        ]
      }
    ]
  },
  {
    "set": 28,
    "questions": [
      {
        "number": 1,
        "question": "Validate a username that starts with an uppercase letter and contains at least one digit. Validate email and a password of 8–20 characters with uppercase, lowercase and a special character.",
        "language": "HTML",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Strict Validation</h2>\n  <form onsubmit=\"return verify()\">\n    Username: <input id=\"u\" placeholder=\"e.g. Student1\"><br><br>\n    Email: <input id=\"e\"><br><br>\n    Password (8-20): <input type=\"password\" id=\"p\"><br><br>\n    <input type=\"submit\" value=\"Validate\">\n  </form>\n  <p id=\"err\" style=\"color:red;\"></p>\n  <script>\n    function verify() {\n      const u = document.getElementById(\"u\").value;\n      const e = document.getElementById(\"e\").value;\n      const p = document.getElementById(\"p\").value;\n      const err = document.getElementById(\"err\");\n\n      if (!/^[A-Z](?=.*\\d)/.test(u)) { err.textContent = \"Username must start with capital letter & contain a digit.\"; return false; }\n      if (!/^\\S+@\\S+\\.\\S+$/.test(e)) { err.textContent = \"Invalid email.\"; return false; }\n      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\W).{8,20}$/.test(p)) { err.textContent = \"Password must be 8-20 chars with upper, lower, & special char.\"; return false; }\n\n      alert(\"Credentials Valid!\");\n      return true;\n    }\n  </script>\n</body>\n</html>",
        "explanation": "Enforces username starting with capital letter and digit, email format, and password length.",
        "viva": [
          "What does ^[A-Z] match? — An uppercase letter at the first position."
        ]
      },
      {
        "number": 2,
        "question": "Define an array of student objects in an AngularJS controller and display the student details in a table using ng-repeat.",
        "language": "AngularJS",
        "code": "<!DOCTYPE html>\n<html ng-app=\"app\">\n<head>\n  <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js\"></script>\n</head>\n<body ng-controller=\"Ctrl\">\n  <h2>Student Table</h2>\n  <table border=\"1\" cellpadding=\"6\">\n    <tr><th>Roll</th><th>Name</th><th>Dept</th></tr>\n    <tr ng-repeat=\"s in students\">\n      <td>{{ s.roll }}</td><td>{{ s.name }}</td><td>{{ s.dept }}</td>\n    </tr>\n  </table>\n  <script>\n    angular.module(\"app\", []).controller(\"Ctrl\", function($scope) {\n      $scope.students = [\n        { roll: \"101\", name: \"Aarav\", dept: \"CSE\" },\n        { roll: \"102\", name: \"Diya\",  dept: \"IT\" },\n        { roll: \"103\", name: \"Sneha\", dept: \"AI\" }\n      ];\n    });\n  </script>\n</body>\n</html>",
        "explanation": "Uses ng-repeat='s in students' to loop through an array of objects in a table.",
        "viva": [
          "What is ng-repeat? — Repeats a template block for each item in an array/collection."
        ]
      }
    ]
  },
  {
    "set": 29,
    "questions": [
      {
        "number": 1,
        "question": "Use the JavaScript Date object to display the current date and time. Update the displayed time every second using setInterval().",
        "language": "JavaScript",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Live Digital Clock</h2>\n  <h1 id=\"clock\" style=\"font-family:monospace;color:#1e3a8a;\">00:00:00</h1>\n  <p id=\"date\"></p>\n  <script>\n    function tick() {\n      const d = new Date();\n      document.getElementById(\"clock\").textContent = d.toLocaleTimeString();\n      document.getElementById(\"date\").textContent = d.toDateString();\n    }\n    tick();\n    setInterval(tick, 1000);\n  </script>\n</body>\n</html>",
        "explanation": "Uses new Date() and setInterval(tick, 1000) to update clock every 1000ms.",
        "viva": [
          "What does setInterval() return? — An interval ID used to stop it with clearInterval()."
        ]
      },
      {
        "number": 2,
        "question": "Display a list of products and provide a search box. Use the AngularJS filter to show matching products dynamically as the user types.",
        "language": "AngularJS",
        "code": "<!DOCTYPE html>\n<html ng-app=\"app\">\n<head>\n  <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js\"></script>\n</head>\n<body ng-controller=\"Ctrl\">\n  <h2>Product Search</h2>\n  Search: <input type=\"text\" ng-model=\"query\"><br><br>\n  <ul>\n    <li ng-repeat=\"p in products | filter:query\">{{ p.name }} - &#8377; {{ p.price }}</li>\n  </ul>\n  <script>\n    angular.module(\"app\", []).controller(\"Ctrl\", function($scope) {\n      $scope.products = [\n        { name: \"Laptop\", price: 55000 },\n        { name: \"Mouse\", price: 800 },\n        { name: \"Keyboard\", price: 1500 },\n        { name: \"Monitor\", price: 9000 }\n      ];\n    });\n  </script>\n</body>\n</html>",
        "explanation": "Pipes array through filter:query to dynamically filter matching products as user types.",
        "viva": [
          "How does AngularJS filter work? — Matches query text against all properties of array objects."
        ]
      }
    ]
  },
  {
    "set": 30,
    "questions": [
      {
        "number": 1,
        "question": "Create a calculator with digit buttons and addition, subtraction, multiplication and division operations. Display the entered expression and calculated result.",
        "language": "JavaScript",
        "code": "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .calc { width:200px; font-family:sans-serif; }\n    #txt { width:100%; height:35px; font-size:18px; text-align:right; margin-bottom:6px; }\n    button { width:45px; height:35px; font-size:16px; margin:2px; cursor:pointer; }\n  </style>\n</head>\n<body>\n  <div class=\"calc\">\n    <input type=\"text\" id=\"txt\" readonly value=\"0\">\n    <div>\n      <button onclick=\"clr()\">C</button><button onclick=\"add('/')\">/</button><button onclick=\"add('*')\">*</button><button onclick=\"add('-')\">-</button><br>\n      <button onclick=\"add('7')\">7</button><button onclick=\"add('8')\">8</button><button onclick=\"add('9')\">9</button><button onclick=\"add('+')\">+</button><br>\n      <button onclick=\"add('4')\">4</button><button onclick=\"add('5')\">5</button><button onclick=\"add('6')\">6</button><button onclick=\"calc()\">=</button><br>\n      <button onclick=\"add('1')\">1</button><button onclick=\"add('2')\">2</button><button onclick=\"add('3')\">3</button><button onclick=\"add('0')\">0</button>\n    </div>\n  </div>\n  <script>\n    let exp = \"\";\n    const t = document.getElementById(\"txt\");\n    function add(c) { if(t.value===\"0\"&&!isNaN(c)) exp=\"\"; exp += c; t.value = exp; }\n    function clr() { exp = \"\"; t.value = \"0\"; }\n    function calc() {\n      try { t.value = Function(\"'use strict';return (\" + exp + \")\")(); exp = String(t.value); }\n      catch(_) { t.value = \"Error\"; exp = \"\"; }\n    }\n  </script>\n</body>\n</html>",
        "explanation": "Simple interactive calculator grid handling digit clicks and arithmetic evaluation.",
        "viva": [
          "Why use Function() instead of eval()? — Safer and runs in global scope without local closure leaks."
        ]
      },
      {
        "number": 2,
        "question": "Create a registration form using AngularJS. Apply required, minlength and pattern validation and display errors using form state properties such as $dirty and $invalid.",
        "language": "AngularJS",
        "code": "<!DOCTYPE html>\n<html ng-app>\n<head>\n  <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js\"></script>\n</head>\n<body>\n  <h2>AngularJS Validation</h2>\n  <form name=\"f\" novalidate>\n    Name (Min 3): <input name=\"u\" ng-model=\"user\" required ng-minlength=\"3\"><br>\n    <span style=\"color:red;\" ng-show=\"f.u.$dirty && f.u.$invalid\">Invalid name (Min 3 chars).</span><br>\n\n    Phone (10 digits): <input name=\"ph\" ng-model=\"phone\" required ng-pattern=\"/^[0-9]{10}$/\"><br>\n    <span style=\"color:red;\" ng-show=\"f.ph.$dirty && f.ph.$invalid\">Must be 10 numeric digits.</span><br>\n\n    <button type=\"submit\" ng-disabled=\"f.$invalid\">Submit</button>\n  </form>\n</body>\n</html>",
        "explanation": "Checks $dirty && $invalid to conditionally display validation errors and disables submit button.",
        "viva": [
          "What does $dirty mean? — Form input has been edited by user."
        ]
      }
    ]
  },
  {
    "set": 31,
    "questions": [
      {
        "number": 1,
        "question": "Accept values from the user, insert them into a JavaScript array, display the array, sort its elements and display the sorted array.",
        "language": "JavaScript",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Array Insert & Sort</h2>\n  <input type=\"text\" id=\"val\">\n  <button onclick=\"add()\">Insert</button>\n  <button onclick=\"sortArr()\">Sort</button>\n  <p><strong>Original:</strong> <span id=\"orig\">[]</span></p>\n  <p><strong>Sorted:</strong> <span id=\"sorted\">[]</span></p>\n  <script>\n    let arr = [];\n    function add() {\n      const v = document.getElementById(\"val\").value.trim();\n      if(v) { arr.push(isNaN(v) ? v : Number(v)); document.getElementById(\"val\").value = \"\"; }\n      document.getElementById(\"orig\").textContent = JSON.stringify(arr);\n    }\n    function sortArr() {\n      let s = [...arr].sort((a,b) => (typeof a===\"number\" && typeof b===\"number\") ? a-b : String(a).localeCompare(String(b)));\n      document.getElementById(\"sorted\").textContent = JSON.stringify(s);\n    }\n  </script>\n</body>\n</html>",
        "explanation": "Inserts values into array via push(), sorts cloned array, and displays in JSON format.",
        "viva": [
          "Why use [...arr] before sorting? — Clones the array so original array is not mutated."
        ]
      },
      {
        "number": 2,
        "question": "Maintain a list of student records in an AngularJS controller. Accept a student name in a search field and display matching records dynamically.",
        "language": "AngularJS",
        "code": "<!DOCTYPE html>\n<html ng-app=\"app\">\n<head>\n  <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js\"></script>\n</head>\n<body ng-controller=\"Ctrl\">\n  <h2>Student Search</h2>\n  Search: <input type=\"text\" ng-model=\"srch.name\"><br><br>\n  <table border=\"1\" cellpadding=\"6\">\n    <tr><th>Roll</th><th>Name</th><th>Branch</th></tr>\n    <tr ng-repeat=\"s in list | filter:srch\">\n      <td>{{ s.roll }}</td><td>{{ s.name }}</td><td>{{ s.branch }}</td>\n    </tr>\n  </table>\n  <script>\n    angular.module(\"app\", []).controller(\"Ctrl\", function($scope) {\n      $scope.list = [\n        { roll: \"1\", name: \"Ananya\", branch: \"CSE\" },\n        { roll: \"2\", name: \"Rohan\", branch: \"IT\" },\n        { roll: \"3\", name: \"Sneha\", branch: \"CSE\" }\n      ];\n    });\n  </script>\n</body>\n</html>",
        "explanation": "Uses filter:srch with ng-model='srch.name' to filter student objects dynamically.",
        "viva": [
          "How to filter by a specific property? — Bind ng-model to an object property like srch.name."
        ]
      }
    ]
  },
  {
    "set": 32,
    "questions": [
      {
        "number": 1,
        "question": "Accept a number and display its multiplication table from 1 to 10 using a loop. Format the result as an HTML table or list.",
        "language": "JavaScript",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Multiplication Table</h2>\n  Number: <input type=\"number\" id=\"num\" value=\"7\">\n  <button onclick=\"gen()\">Show Table</button>\n  <div id=\"out\" style=\"margin-top:10px;\"></div>\n  <script>\n    function gen() {\n      const n = Number(document.getElementById(\"num\").value);\n      let html = \"<table border='1' cellpadding='6'>\";\n      for (let i = 1; i <= 10; i++) {\n        html += `<tr><td>${n} x ${i}</td><td>${n * i}</td></tr>`;\n      }\n      html += \"</table>\";\n      document.getElementById(\"out\").innerHTML = html;\n    }\n    gen();\n  </script>\n</body>\n</html>",
        "explanation": "Loops from 1 to 10 and builds a simple HTML table of products.",
        "viva": [
          "What does innerHTML do? — Replaces the inner HTML markup of an element."
        ]
      },
      {
        "number": 2,
        "question": "Create a text input bound with ng-model and display a greeting such as Hello, followed by the entered name, using two-way data binding.",
        "language": "AngularJS",
        "code": "<!DOCTYPE html>\n<html ng-app>\n<head>\n  <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js\"></script>\n</head>\n<body ng-init=\"name='World'\">\n  <h2>Two-Way Greeting</h2>\n  Enter Name: <input type=\"text\" ng-model=\"name\"><br><br>\n  <h3>Hello, {{ name }}!</h3>\n</body>\n</html>",
        "explanation": "Two-way binding dynamically reflecting name in the greeting.",
        "viva": [
          "What is the root directive in AngularJS? — ng-app."
        ]
      }
    ]
  },
  {
    "set": 33,
    "questions": [
      {
        "number": 1,
        "question": "Accept a string and count the occurrences of a, e, i, o and u without considering letter case. Display the total number of vowels.",
        "language": "JavaScript",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Vowel Counter</h2>\n  <textarea id=\"txt\" rows=\"3\" cols=\"30\">Hello World Web Technologies</textarea><br>\n  <button onclick=\"count()\">Count Vowels</button>\n  <h3 id=\"res\"></h3>\n  <script>\n    function count() {\n      const str = document.getElementById(\"txt\").value.toLowerCase();\n      const match = str.match(/[aeiou]/g);\n      const total = match ? match.length : 0;\n      document.getElementById(\"res\").textContent = \"Total Vowels = \" + total;\n    }\n    count();\n  </script>\n</body>\n</html>",
        "explanation": "Uses regular expression str.match(/[aeiou]/g) to count vowels case-insensitively.",
        "viva": [
          "What does the g flag mean in regex? — Global search across the entire string."
        ]
      },
      {
        "number": 2,
        "question": "Create a list of names and use AngularJS filters to display names in uppercase and in alphabetical order.",
        "language": "AngularJS",
        "code": "<!DOCTYPE html>\n<html ng-app=\"app\">\n<head>\n  <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js\"></script>\n</head>\n<body ng-controller=\"Ctrl\">\n  <h2>Names Filtered</h2>\n  <ol>\n    <li ng-repeat=\"n in names | orderBy\">{{ n | uppercase }}</li>\n  </ol>\n  <script>\n    angular.module(\"app\", []).controller(\"Ctrl\", function($scope) {\n      $scope.names = [\"Kavya\", \"Anil\", \"Suresh\", \"Bhavna\"];\n    });\n  </script>\n</body>\n</html>",
        "explanation": "Chains orderBy and uppercase filters on array elements.",
        "viva": [
          "What does the pipe (|) symbol represent? — A filter operator in AngularJS expressions."
        ]
      }
    ]
  },
  {
    "set": 34,
    "questions": [
      {
        "number": 1,
        "question": "Accept a number from the user and determine whether it is even or odd using the modulus operator. Display the result on the page.",
        "language": "JavaScript",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Even or Odd</h2>\n  Number: <input type=\"number\" id=\"num\" value=\"8\">\n  <button onclick=\"check()\">Check</button>\n  <h3 id=\"ans\"></h3>\n  <script>\n    function check() {\n      const n = Number(document.getElementById(\"num\").value);\n      document.getElementById(\"ans\").textContent = (n % 2 === 0) ? `${n} is EVEN` : `${n} is ODD`;\n    }\n    check();\n  </script>\n</body>\n</html>",
        "explanation": "Uses n % 2 === 0 to determine even or odd.",
        "viva": [
          "What does the % operator return? — The division remainder."
        ]
      },
      {
        "number": 2,
        "question": "Develop a student form with name, email and password fields. Use AngularJS validation directives and display suitable messages for invalid entries.",
        "language": "AngularJS",
        "code": "<!DOCTYPE html>\n<html ng-app>\n<head>\n  <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js\"></script>\n</head>\n<body>\n  <h2>Student Form</h2>\n  <form name=\"sf\" novalidate>\n    Name: <input name=\"nm\" ng-model=\"n\" required><br>\n    <span style=\"color:red;\" ng-show=\"sf.nm.$touched && sf.nm.$invalid\">Name is required.</span><br>\n\n    Email: <input type=\"email\" name=\"em\" ng-model=\"e\" required><br>\n    <span style=\"color:red;\" ng-show=\"sf.em.$touched && sf.em.$invalid\">Valid email required.</span><br>\n\n    <button type=\"submit\" ng-disabled=\"sf.$invalid\">Register</button>\n  </form>\n</body>\n</html>",
        "explanation": "Uses $touched && $invalid to show validation warnings after user unfocuses field.",
        "viva": [
          "What is $touched? — Indicates the user focused and then blurred the input."
        ]
      }
    ]
  },
  {
    "set": 35,
    "questions": [
      {
        "number": 1,
        "question": "Create two numeric input fields and a Calculate button. Retrieve the values, calculate their sum and display the result dynamically.",
        "language": "JavaScript",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Sum Calculator</h2>\n  A: <input type=\"number\" id=\"a\" value=\"25\"><br><br>\n  B: <input type=\"number\" id=\"b\" value=\"75\"><br><br>\n  <button onclick=\"sum()\">Calculate Sum</button>\n  <h3 id=\"res\"></h3>\n  <script>\n    function sum() {\n      const a = Number(document.getElementById(\"a\").value);\n      const b = Number(document.getElementById(\"b\").value);\n      document.getElementById(\"res\").textContent = `Sum = ${a + b}`;\n    }\n    sum();\n  </script>\n</body>\n</html>",
        "explanation": "Reads values with Number() and displays sum dynamically in h3.",
        "viva": [
          "Why use Number()? — input.value returns strings; + would concatenate without conversion."
        ]
      },
      {
        "number": 2,
        "question": "Create a course registration form using AngularJS directives and ng-model. Display the selected course and entered student details dynamically.",
        "language": "AngularJS",
        "code": "<!DOCTYPE html>\n<html ng-app>\n<head>\n  <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js\"></script>\n</head>\n<body ng-init=\"c='Web Tech'\">\n  <h2>Course Registration</h2>\n  Student Name: <input type=\"text\" ng-model=\"name\"><br><br>\n  Course: \n  <select ng-model=\"c\">\n    <option value=\"Web Tech\">Web Tech</option>\n    <option value=\"Cloud Computing\">Cloud Computing</option>\n    <option value=\"AI / ML\">AI / ML</option>\n  </select>\n  <hr>\n  <p>Enrolled: <strong>{{ name }}</strong> for <strong>{{ c }}</strong></p>\n</body>\n</html>",
        "explanation": "Synchronizes name and select dropdown dynamically with ng-model.",
        "viva": [
          "What does ng-init do? — Initializes scope variable values in template."
        ]
      }
    ]
  },
  {
    "set": 36,
    "questions": [
      {
        "number": 1,
        "question": "Create buttons or a colour palette. Change the webpage background when a button is clicked or when the pointer moves over a palette colour.",
        "language": "HTML",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Background Palette</h2>\n  <button onclick=\"setBg('#eff6ff')\" onmouseover=\"setBg('#eff6ff')\">Blue</button>\n  <button onclick=\"setBg('#f0fdf4')\" onmouseover=\"setBg('#f0fdf4')\">Green</button>\n  <button onclick=\"setBg('#fef2f2')\" onmouseover=\"setBg('#fef2f2')\">Red</button>\n  <button onclick=\"setBg('#fff')\">Reset</button>\n  <script>\n    function setBg(col) { document.body.style.backgroundColor = col; }\n  </script>\n</body>\n</html>",
        "explanation": "Changes document.body.style.backgroundColor on button click and hover.",
        "viva": [
          "Difference between onclick and onmouseover? — onclick fires on mouse click; onmouseover fires when pointer hovers over element."
        ]
      },
      {
        "number": 2,
        "question": "Write and execute a Node.js program that displays Hello World in the console.",
        "language": "Node.js",
        "code": "// app.js\nconsole.log(\"Hello World from Node.js!\");\nconsole.log(\"Node version: \" + process.version);",
        "explanation": "Basic Node.js console log script run via node app.js.",
        "viva": [
          "How do you run a Node script? — By running node filename.js in terminal."
        ]
      }
    ]
  },
  {
    "set": 37,
    "questions": [
      {
        "number": 1,
        "question": "Create a webpage and use getElementById or querySelector to access elements. Change the text, style and content dynamically in response to a button click.",
        "language": "CSS / HTML",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>DOM Manipulation</h2>\n  <div id=\"box\" style=\"padding:15px;border:1px solid #aaa;\">Original Content</div><br>\n  <button onclick=\"change()\">Change Content & Style</button>\n  <script>\n    function change() {\n      const el = document.getElementById(\"box\");\n      el.textContent = \"Text and style changed at \" + new Date().toLocaleTimeString();\n      el.style.backgroundColor = \"#dcfce7\";\n      el.style.color = \"#15803d\";\n      el.style.fontWeight = \"bold\";\n    }\n  </script>\n</body>\n</html>",
        "explanation": "Modifies textContent and style properties of element selected via getElementById.",
        "viva": [
          "Difference between textContent and innerHTML? — textContent sets plain text; innerHTML parses HTML tags."
        ]
      },
      {
        "number": 2,
        "question": "Create a web server using the Node.js HTTP module. Listen on a specified port and respond to browser requests with a text message.",
        "language": "Node.js",
        "code": "// server.js\nconst http = require('http');\n\nhttp.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end(\"Hello from Node.js Web Server!\");\n}).listen(3000, () => {\n  console.log(\"Server running at http://localhost:3000/\");\n});",
        "explanation": "Creates HTTP server on port 3000 responding with 200 OK and text.",
        "viva": [
          "What does res.writeHead() do? — Sends HTTP status code and header response."
        ]
      }
    ]
  },
  {
    "set": 38,
    "questions": [
      {
        "number": 1,
        "question": "Create a webpage demonstrating click and mouseover events. Change the appearance or displayed message when the user interacts with the elements.",
        "language": "HTML",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Mouse Events Demo</h2>\n  <div id=\"box\" \n       onmouseover=\"this.style.background='#bfdbfe'; this.textContent='Mouse Over!'\" \n       onmouseout=\"this.style.background='#eee'; this.textContent='Hover or Click Me'\" \n       onclick=\"this.style.background='#bbf7d0'; this.textContent='Clicked!'\"\n       style=\"padding:30px;background:#eee;border:1px solid #ccc;cursor:pointer;width:220px;text-align:center;\">\n    Hover or Click Me\n  </div>\n</body>\n</html>",
        "explanation": "Inline event handlers onmouseover, onmouseout, and onclick changing style and text.",
        "viva": [
          "What does this refer to in inline event attributes? — The target DOM element."
        ]
      },
      {
        "number": 2,
        "question": "Use the Node.js fs module to read a local text file and display its contents in the console.",
        "language": "Node.js",
        "code": "// readFile.js\nconst fs = require('fs');\n\nfs.readFile('sample.txt', 'utf8', (err, data) => {\n  if (err) throw err;\n  console.log(\"File Contents:\\n\" + data);\n});",
        "explanation": "Asynchronously reads text file using fs.readFile() with utf8 encoding.",
        "viva": [
          "Why use asynchronous fs.readFile? — Non-blocking I/O keeps event loop free."
        ],
        "files": [
          {
            "name": "readFile.js",
            "code": "const fs = require('fs');\nfs.readFile('sample.txt', 'utf8', (err, data) => {\n  if (err) throw err;\n  console.log(data);\n});"
          },
          {
            "name": "sample.txt",
            "code": "Web Technologies Lab\nNode.js fs module practice."
          }
        ]
      }
    ]
  },
  {
    "set": 39,
    "questions": [
      {
        "number": 1,
        "question": "Create a student form and validate mandatory fields, email and phone number before allowing submission. Display appropriate error messages.",
        "language": "JavaScript",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Student Form</h2>\n  <form onsubmit=\"return validate()\">\n    Name: <input id=\"name\"><br><br>\n    Email: <input id=\"email\"><br><br>\n    Phone (10 Digits): <input id=\"phone\"><br><br>\n    <input type=\"submit\" value=\"Register\">\n  </form>\n  <p id=\"err\" style=\"color:red;\"></p>\n  <script>\n    function validate() {\n      const n = document.getElementById(\"name\").value.trim();\n      const e = document.getElementById(\"email\").value.trim();\n      const p = document.getElementById(\"phone\").value.trim();\n      const err = document.getElementById(\"err\");\n\n      if (!n) { err.textContent = \"Name is required.\"; return false; }\n      if (!/^\\S+@\\S+\\.\\S+$/.test(e)) { err.textContent = \"Valid email required.\"; return false; }\n      if (!/^[0-9]{10}$/.test(p)) { err.textContent = \"Phone must be exactly 10 digits.\"; return false; }\n\n      alert(\"Form Valid!\");\n      return true;\n    }\n  </script>\n</body>\n</html>",
        "explanation": "Validates mandatory name, email regex, and 10-digit phone number.",
        "viva": [
          "What does /^[0-9]{10}$/ ensure? — Exactly 10 digits from start to end."
        ]
      },
      {
        "number": 2,
        "question": "Write a Node.js program to create or update a text file using fs.writeFile or fs.appendFile and display a success message.",
        "language": "Node.js",
        "code": "// fileWrite.js\nconst fs = require('fs');\n\nfs.writeFile('log.txt', 'Initial Log Entry\\n', (err) => {\n  if (err) throw err;\n  console.log(\"File created successfully!\");\n\n  fs.appendFile('log.txt', 'Updated Log Entry\\n', (err2) => {\n    if (err2) throw err2;\n    console.log(\"File appended successfully!\");\n  });\n});",
        "explanation": "Demonstrates fs.writeFile() for creating and fs.appendFile() for appending.",
        "viva": [
          "Difference between writeFile and appendFile? — writeFile overwrites file; appendFile appends to the end."
        ]
      }
    ]
  },
  {
    "set": 40,
    "questions": [
      {
        "number": 1,
        "question": "Create a webpage that accepts an item, adds it to a displayed list and allows the list contents to be shown and updated dynamically.",
        "language": "HTML",
        "code": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Dynamic List</h2>\n  <input type=\"text\" id=\"item\">\n  <button onclick=\"add()\">Add Item</button>\n  <ul id=\"list\"></ul>\n  <script>\n    const items = [\"Item 1\", \"Item 2\"];\n    function render() {\n      document.getElementById(\"list\").innerHTML = items.map((it, i) => \n        `<li>${it} <button onclick=\"del(${i})\">x</button></li>`\n      ).join(\"\");\n    }\n    function add() {\n      const v = document.getElementById(\"item\").value.trim();\n      if (v) { items.push(v); document.getElementById(\"item\").value = \"\"; render(); }\n    }\n    function del(idx) {\n      items.splice(idx, 1);\n      render();\n    }\n    render();\n  </script>\n</body>\n</html>",
        "explanation": "Dynamic CRUD list adding elements with push() and deleting with splice().",
        "viva": [
          "What does items.splice(idx, 1) do? — Removes 1 item at index idx."
        ]
      },
      {
        "number": 2,
        "question": "Use the events module to create a custom event named greet. Register an event listener, emit the event and display a response.",
        "language": "Node.js",
        "code": "// event.js\nconst EventEmitter = require('events');\nconst emitter = new EventEmitter();\n\n// Register listener\nemitter.on('greet', (name) => {\n  console.log(`Hello, ${name}! Welcome to Node.js Events.`);\n});\n\n// Emit event\nemitter.emit('greet', 'Student');",
        "explanation": "Uses EventEmitter to register an event listener on 'greet' and trigger with emit().",
        "viva": [
          "What is EventEmitter? — A core Node.js class for emitting and handling named events."
        ]
      }
    ]
  }
];
