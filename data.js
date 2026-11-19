window.WT_SETS = [
  {
    "set": 1,
    "questions": [
      {
        "number": 1,
        "question": "Create an HTML webpage displaying the college name, logo, address, vision, mission, departments, facilities and contact details. Use suitable headings, paragraphs, images and hyperlinks.",
        "language": "HTML",
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>ABC Institute of Technology</title>\n  <style>\n    body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; color: #222; }\n    header { text-align: center; border-bottom: 2px solid #003366; padding-bottom: 15px; }\n    .logo { width: 75px; height: 75px; background: #003366; color: white; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 26px; font-weight: bold; margin-bottom: 8px; }\n    h1 { color: #003366; margin: 5px 0; }\n    .card { background: #f4f7fb; border-left: 4px solid #003366; padding: 12px 18px; margin: 15px 0; }\n    ul { padding-left: 20px; }\n    footer { text-align: center; margin-top: 30px; font-size: 13px; color: #666; border-top: 1px solid #ccc; padding-top: 10px; }\n  </style>\n</head>\n<body>\n  <header>\n    <div class=\"logo\">ABC</div>\n    <h1>ABC INSTITUTE OF TECHNOLOGY</h1>\n    <p>123 Knowledge Park, Technology Enclave, Hyderabad - 500081</p>\n  </header>\n\n  <section class=\"card\">\n    <h2>Vision & Mission</h2>\n    <p><strong>Vision:</strong> To be a premier institution of academic excellence and innovative research.</p>\n    <p><strong>Mission:</strong> To provide quality technical education and foster ethical leadership.</p>\n  </section>\n\n  <section>\n    <h2>Departments</h2>\n    <ul>\n      <li>Computer Science & Engineering</li>\n      <li>Information Technology</li>\n      <li>Electronics & Communication Engineering</li>\n      <li>Artificial Intelligence & Data Science</li>\n    </ul>\n  </section>\n\n  <section>\n    <h2>Campus Facilities</h2>\n    <ul>\n      <li>High-tech Computer Laboratories & 1 Gbps Wi-Fi</li>\n      <li>Central Digital Library & Research Wing</li>\n      <li>Indoor Sports Complex & Gymnasium</li>\n      <li>Hostel & Cafeteria</li>\n    </ul>\n  </section>\n\n  <section class=\"card\">\n    <h2>Contact Us</h2>\n    <p>Email: <a href=\"mailto:info@abctech.edu\">info@abctech.edu</a> | Phone: +91 40 1234 5678</p>\n    <p>Official Website: <a href=\"https://example.edu\" target=\"_blank\">www.abctech.edu</a></p>\n  </section>\n\n  <footer>\n    <p>&copy; 2026 ABC Institute of Technology. All Rights Reserved.</p>\n  </footer>\n</body>\n</html>",
        "explanation": "Uses semantic HTML tags: `<header>`, `<section>`, `<footer>`, headings `<h1>-<h2>`, paragraphs `<p>`, unordered lists `<ul>/<li>`, and anchor links `<a>`.",
        "viva": [
          "What is the difference between relative and absolute URLs in HTML? — Relative URLs point to files within the same site, while absolute URLs contain the complete web protocol and domain.",
          "What does the target='_blank' attribute do in an anchor tag? — It opens the linked page in a new browser tab or window.",
          "Why is semantic HTML important? — It improves accessibility, SEO, and code maintainability."
        ]
      },
      {
        "number": 2,
        "question": "Write a PHP script that displays a welcome message containing your college name using echo or print.",
        "language": "PHP",
        "code": "<!DOCTYPE html>\n<html>\n<head><title>College Welcome</title></head>\n<body>\n<?php\n  $collegeName = \"ABC Institute of Technology\";\n  echo \"<h1>Welcome to \" . $collegeName . \"!</h1>\";\n  print \"<p>Established in 2000 | Accredited by NBA & NAAC A++</p>\";\n  echo \"<p>Wishing all Web Technologies students a productive lab session.</p>\";\n?>\n</body>\n</html>",
        "explanation": "Uses `<?php ... ?>` tags. Both `echo` and `print` output strings to browser; `.` performs string concatenation.",
        "viva": [
          "What is the difference between echo and print in PHP? — echo can take multiple parameters and has no return value; print takes one argument and returns 1.",
          "How are variables declared in PHP? — Variables start with the $ sign followed by the variable name.",
          "Is PHP client-side or server-side? — PHP is a server-side scripting language executed on the web server."
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Student Registration Form</title>\n  <style>\n    body { font-family: Arial, sans-serif; background: #f0f4f8; padding: 20px; }\n    .form-box { max-width: 500px; margin: auto; background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }\n    h2 { text-align: center; color: #1a365d; }\n    .field { margin-bottom: 14px; }\n    label { display: block; font-weight: bold; margin-bottom: 5px; }\n    input[type=\"text\"], input[type=\"email\"], input[type=\"tel\"], input[type=\"password\"], input[type=\"date\"], select, textarea {\n      width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;\n    }\n    .radio-group { display: flex; gap: 15px; }\n    .buttons { display: flex; gap: 10px; margin-top: 18px; }\n    button { flex: 1; padding: 10px; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; }\n    button[type=\"submit\"] { background: #2b6cb0; color: white; }\n    button[type=\"reset\"] { background: #e2e8f0; color: #4a5568; }\n  </style>\n</head>\n<body>\n  <div class=\"form-box\">\n    <h2>Student Registration</h2>\n    <form action=\"#\" method=\"POST\">\n      <div class=\"field\">\n        <label for=\"name\">Full Name:</label>\n        <input type=\"text\" id=\"name\" name=\"name\" required placeholder=\"Enter full name\">\n      </div>\n      <div class=\"field\">\n        <label>Gender:</label>\n        <div class=\"radio-group\">\n          <label><input type=\"radio\" name=\"gender\" value=\"Male\" required> Male</label>\n          <label><input type=\"radio\" name=\"gender\" value=\"Female\"> Female</label>\n          <label><input type=\"radio\" name=\"gender\" value=\"Other\"> Other</label>\n        </div>\n      </div>\n      <div class=\"field\">\n        <label for=\"dob\">Date of Birth:</label>\n        <input type=\"date\" id=\"dob\" name=\"dob\" required>\n      </div>\n      <div class=\"field\">\n        <label for=\"email\">Email Address:</label>\n        <input type=\"email\" id=\"email\" name=\"email\" required placeholder=\"user@example.com\">\n      </div>\n      <div class=\"field\">\n        <label for=\"phone\">Phone Number:</label>\n        <input type=\"tel\" id=\"phone\" name=\"phone\" pattern=\"[0-9]{10}\" required placeholder=\"10-digit number\">\n      </div>\n      <div class=\"field\">\n        <label for=\"address\">Address:</label>\n        <textarea id=\"address\" name=\"address\" rows=\"3\" required></textarea>\n      </div>\n      <div class=\"field\">\n        <label for=\"course\">Select Course:</label>\n        <select id=\"course\" name=\"course\" required>\n          <option value=\"\">-- Choose Course --</option>\n          <option value=\"B.Tech CSE\">B.Tech CSE</option>\n          <option value=\"B.Tech IT\">B.Tech IT</option>\n          <option value=\"B.Tech AI&DS\">B.Tech AI&DS</option>\n        </select>\n      </div>\n      <div class=\"field\">\n        <label for=\"pwd\">Password:</label>\n        <input type=\"password\" id=\"pwd\" name=\"pwd\" required minlength=\"6\">\n      </div>\n      <div class=\"field\">\n        <label for=\"cpwd\">Confirm Password:</label>\n        <input type=\"password\" id=\"cpwd\" name=\"cpwd\" required minlength=\"6\">\n      </div>\n      <div class=\"buttons\">\n        <button type=\"submit\">Submit</button>\n        <button type=\"reset\">Reset</button>\n      </div>\n    </form>\n  </div>\n</body>\n</html>",
        "explanation": "Uses `<form>` with appropriate `<input>` types (`text`, `email`, `tel`, `date`, `radio`, `password`), `<select>`, `<textarea>`, and `<button>` controls.",
        "viva": [
          "What is the difference between GET and POST form methods? — GET appends parameters to URL with length limits; POST sends them in the HTTP request body and is more secure.",
          "What does the pattern attribute do in HTML5? — It validates the input against a client-side regular expression before submission.",
          "What is the purpose of the reset button? — It clears all fields in the form back to their default initial values."
        ]
      },
      {
        "number": 2,
        "question": "Create an HTML form to collect personal details. Submit and retrieve the values using $_GET, $_POST and $_REQUEST, and display the submitted information.",
        "language": "PHP",
        "code": "<?php\n$submitted = ($_SERVER['REQUEST_METHOD'] === 'POST');\n?>\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Form Data Retrieval</title>\n  <style>\n    body { font-family: Arial; padding: 20px; }\n    .box { border: 1px solid #aaa; padding: 15px; border-radius: 6px; max-width: 450px; margin-bottom: 20px; }\n    table { width: 100%; border-collapse: collapse; margin-top: 10px; }\n    th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }\n    th { background: #eef; }\n  </style>\n</head>\n<body>\n  <div class=\"box\">\n    <h3>Enter Personal Details</h3>\n    <form method=\"POST\" action=\"\">\n      <p><label>Name: <input type=\"text\" name=\"username\" required></label></p>\n      <p><label>Email: <input type=\"email\" name=\"useremail\" required></label></p>\n      <p><label>City: <input type=\"text\" name=\"usercity\" required></label></p>\n      <button type=\"submit\">Submit via POST</button>\n    </form>\n  </div>\n\n  <?php if ($submitted): ?>\n  <div class=\"box\">\n    <h3>Submitted Values Retrieved via PHP:</h3>\n    <table>\n      <tr><th>Superglobal</th><th>Field</th><th>Retrieved Value</th></tr>\n      <tr><td>$_POST</td><td>username</td><td><?= htmlspecialchars($_POST['username'] ?? '') ?></td></tr>\n      <tr><td>$_POST</td><td>useremail</td><td><?= htmlspecialchars($_POST['useremail'] ?? '') ?></td></tr>\n      <tr><td>$_REQUEST</td><td>usercity</td><td><?= htmlspecialchars($_REQUEST['usercity'] ?? '') ?></td></tr>\n      <tr><td>$_GET</td><td>(URL Query)</td><td><?= htmlspecialchars($_GET['ref'] ?? 'None in POST request') ?></td></tr>\n    </table>\n  </div>\n  <?php endif; ?>\n</body>\n</html>",
        "explanation": "Demonstrates retrieving user submissions using PHP superglobals `$_POST`, `$_GET`, and `$_REQUEST`. Uses `htmlspecialchars()` to prevent XSS.",
        "viva": [
          "What is contained inside $_REQUEST? — $_REQUEST is an associative array containing contents of $_GET, $_POST, and $_COOKIE.",
          "Why should you wrap output with htmlspecialchars()? — It converts special HTML characters like < and > to entities to prevent Cross-Site Scripting (XSS).",
          "How can you check if a form has been submitted? — By checking $_SERVER['REQUEST_METHOD'] === 'POST' or isset($_POST['submitBtn'])."
        ],
        "files": [
          {
            "name": "form.html",
            "code": "<!-- form.html -->\n<form action=\"process.php\" method=\"POST\">\n  <label>Name: <input type=\"text\" name=\"username\"></label><br><br>\n  <label>Email: <input type=\"email\" name=\"useremail\"></label><br><br>\n  <label>City: <input type=\"text\" name=\"usercity\"></label><br><br>\n  <input type=\"submit\" value=\"Submit Form\">\n</form>"
          },
          {
            "name": "process.php",
            "code": "<?php\n// process.php\necho \"<h2>Retrieved Form Details</h2>\";\n\n$name = $_POST['username'] ?? 'Not set';\necho \"Retrieved from $_POST['username']: \" . htmlspecialchars($name) . \"<br>\";\n\n$city = $_REQUEST['usercity'] ?? 'Not set';\necho \"Retrieved from $_REQUEST['usercity']: \" . htmlspecialchars($city) . \"<br>\";\n\n$email = $_GET['useremail'] ?? ($_POST['useremail'] ?? 'Not set');\necho \"Retrieved email: \" . htmlspecialchars($email) . \"<br>\";\n?>"
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Home - My Web Portal</title>\n  <style>\n    body { font-family: 'Segoe UI', Tahoma, sans-serif; margin: 0; background: #f8fafc; color: #1e293b; }\n    nav { background: #1e3a8a; padding: 14px 24px; display: flex; gap: 20px; }\n    nav a { color: white; text-decoration: none; font-weight: bold; padding: 6px 12px; border-radius: 4px; }\n    nav a:hover, nav a.active { background: #3b82f6; }\n    .content { max-width: 800px; margin: 30px auto; padding: 24px; background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }\n    h1 { color: #1e3a8a; }\n    .cta { display: inline-block; background: #2563eb; color: white; padding: 10px 18px; border-radius: 6px; text-decoration: none; margin-top: 15px; }\n  </style>\n</head>\n<body>\n  <nav>\n    <a href=\"home.html\" class=\"active\">Home</a>\n    <a href=\"about.html\">About</a>\n    <a href=\"contact.html\">Contact</a>\n  </nav>\n\n  <div class=\"content\">\n    <h1>Welcome to Our Web Portal</h1>\n    <p>This is the <strong>Home Page (home.html)</strong>. Our portal offers state-of-the-art Web Technologies resources, tutorials, and lab practice codebooks for university students.</p>\n    <p>Explore the tabs above to learn more about our team or reach out to us directly.</p>\n    <a href=\"about.html\" class=\"cta\">Read About Us &rarr;</a>\n  </div>\n</body>\n</html>",
        "explanation": "Multi-page website implementation. Three distinct pages (`home.html`, `about.html`, `contact.html`) share consistent navigation bars linking to each other with relative URLs.",
        "viva": [
          "How do hyperlinks work between multiple HTML pages? — By providing the relative file name in the href attribute (e.g. href='about.html').",
          "What is the role of the active class in navigation bars? — It visually indicates to the user which page is currently being viewed.",
          "What happens if a linked HTML file cannot be found? — The browser returns an HTTP 404 Not Found error."
        ],
        "files": [
          {
            "name": "home.html",
            "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Home Page</title>\n  <style>\n    body { font-family: Arial, sans-serif; margin: 0; background: #f8fafc; color: #333; }\n    nav { background: #1e3a8a; padding: 14px 20px; }\n    nav a { color: white; text-decoration: none; margin-right: 15px; font-weight: bold; }\n    nav a.active { text-decoration: underline; color: #93c5fd; }\n    .container { padding: 30px; }\n  </style>\n</head>\n<body>\n  <nav>\n    <a href=\"home.html\" class=\"active\">Home</a>\n    <a href=\"about.html\">About</a>\n    <a href=\"contact.html\">Contact</a>\n  </nav>\n  <div class=\"container\">\n    <h1>Home Page</h1>\n    <p>Welcome to the Web Technologies Portal! Use the navigation bar above to view About and Contact pages.</p>\n  </div>\n</body>\n</html>"
          },
          {
            "name": "about.html",
            "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>About Us</title>\n  <style>\n    body { font-family: Arial, sans-serif; margin: 0; background: #f8fafc; color: #333; }\n    nav { background: #1e3a8a; padding: 14px 20px; }\n    nav a { color: white; text-decoration: none; margin-right: 15px; font-weight: bold; }\n    nav a.active { text-decoration: underline; color: #93c5fd; }\n    .container { padding: 30px; }\n  </style>\n</head>\n<body>\n  <nav>\n    <a href=\"home.html\">Home</a>\n    <a href=\"about.html\" class=\"active\">About</a>\n    <a href=\"contact.html\">Contact</a>\n  </nav>\n  <div class=\"container\">\n    <h1>About Our Institution</h1>\n    <p>Established with the objective of providing high standard education in computer science and engineering.</p>\n    <h3>Our Key Pillars</h3>\n    <ul>\n      <li>Innovative Curriculum</li>\n      <li>Industry Mentorship</li>\n      <li>Hands-on Laboratory Practice</li>\n    </ul>\n  </div>\n</body>\n</html>"
          },
          {
            "name": "contact.html",
            "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Contact Us</title>\n  <style>\n    body { font-family: Arial, sans-serif; margin: 0; background: #f8fafc; color: #333; }\n    nav { background: #1e3a8a; padding: 14px 20px; }\n    nav a { color: white; text-decoration: none; margin-right: 15px; font-weight: bold; }\n    nav a.active { text-decoration: underline; color: #93c5fd; }\n    .container { padding: 30px; max-width: 500px; }\n    input, textarea { width: 100%; margin-bottom: 12px; padding: 8px; }\n    button { background: #1e3a8a; color: white; border: none; padding: 10px 16px; cursor: pointer; }\n  </style>\n</head>\n<body>\n  <nav>\n    <a href=\"home.html\">Home</a>\n    <a href=\"about.html\">About</a>\n    <a href=\"contact.html\" class=\"active\">Contact</a>\n  </nav>\n  <div class=\"container\">\n    <h1>Contact Us</h1>\n    <form onsubmit=\"alert('Message sent!'); return false;\">\n      <label>Name:</label>\n      <input type=\"text\" required>\n      <label>Email:</label>\n      <input type=\"email\" required>\n      <label>Message:</label>\n      <textarea rows=\"4\" required></textarea>\n      <button type=\"submit\">Send Message</button>\n    </form>\n  </div>\n</body>\n</html>"
          }
        ]
      },
      {
        "number": 2,
        "question": "Accept a number through a form and write PHP code using loops and arithmetic operators to calculate and display the sum of its digits.",
        "language": "PHP",
        "code": "<!DOCTYPE html>\n<html>\n<head><title>Sum of Digits</title></head>\n<body>\n  <h2>Calculate Sum of Digits</h2>\n  <form method=\"POST\">\n    <label>Enter an integer: <input type=\"number\" name=\"num\" required value=\"<?= htmlspecialchars($_POST['num'] ?? '12345') ?>\"></label>\n    <button type=\"submit\">Calculate</button>\n  </form>\n\n<?php\nif ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['num'])) {\n    $num = abs((int)$_POST['num']);\n    $temp = $num;\n    $sum = 0;\n\n    while ($temp > 0) {\n        $digit = $temp % 10;\n        $sum += $digit;\n        $temp = (int)($temp / 10);\n    }\n\n    echo \"<h3>Result:</h3>\";\n    echo \"<p>The sum of digits of <strong>$num</strong> is: <strong>$sum</strong></p>\";\n}\n?>\n</body>\n</html>",
        "explanation": "Uses a `while ($temp > 0)` loop. `% 10` extracts the lowest digit and `(int)($temp / 10)` truncates it until 0.",
        "viva": [
          "What does the % operator do in PHP? — It returns the remainder of the integer division.",
          "Why do we cast (int)($temp / 10)? — In PHP, division / returns a floating point number, so explicit casting discards the decimal fraction.",
          "What does abs() function do? — It converts negative numbers to positive numbers."
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Class Weekly Timetable</title>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 20px; text-align: center; }\n    table { width: 90%; margin: auto; border-collapse: collapse; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }\n    th, td { border: 1px solid #333; padding: 10px; text-align: center; font-size: 14px; }\n    th { background: #2c3e50; color: white; }\n    .break { background: #ecf0f1; font-weight: bold; letter-spacing: 2px; }\n    .lab { background: #d4edda; color: #155724; font-weight: bold; }\n  </style>\n</head>\n<body>\n  <h2>DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING</h2>\n  <h3>III Year B.Tech - Semester II Timetable</h3>\n\n  <table>\n    <tr>\n      <th>Day / Time</th>\n      <th>9:00 - 10:00</th>\n      <th>10:00 - 11:00</th>\n      <th>11:00 - 11:15</th>\n      <th>11:15 - 12:15</th>\n      <th>12:15 - 1:00</th>\n      <th>1:00 - 2:00</th>\n      <th>2:00 - 4:00</th>\n    </tr>\n    <tr>\n      <th>Monday</th>\n      <td>Web Tech</td>\n      <td>Compiler Design</td>\n      <td rowspan=\"6\" class=\"break\">T<br>E<br>A</td>\n      <td>AI & ML</td>\n      <td rowspan=\"6\" class=\"break\">L<br>U<br>N<br>C<br>H</td>\n      <td>Cloud Comp</td>\n      <td class=\"lab\">WT Lab (Batch A)</td>\n    </tr>\n    <tr>\n      <th>Tuesday</th>\n      <td>AI & ML</td>\n      <td>Web Tech</td>\n      <td>Data Mining</td>\n      <td>Compiler Design</td>\n      <td class=\"lab\">WT Lab (Batch B)</td>\n    </tr>\n    <tr>\n      <th>Wednesday</th>\n      <td colspan=\"2\" class=\"lab\">Mini Project Review</td>\n      <td>Web Tech</td>\n      <td>Cloud Comp</td>\n      <td>Library / Seminar</td>\n    </tr>\n    <tr>\n      <th>Thursday</th>\n      <td>Data Mining</td>\n      <td>AI & ML</td>\n      <td>Compiler Design</td>\n      <td>Web Tech</td>\n      <td class=\"lab\">Compiler Design Lab</td>\n    </tr>\n    <tr>\n      <th>Friday</th>\n      <td>Cloud Comp</td>\n      <td>Data Mining</td>\n      <td>Web Tech</td>\n      <td>AI & ML</td>\n      <td>Sports / Club</td>\n    </tr>\n    <tr>\n      <th>Saturday</th>\n      <td colspan=\"2\">Technical Seminar</td>\n      <td colspan=\"2\">Placement Training</td>\n      <td>Mentoring</td>\n    </tr>\n  </table>\n</body>\n</html>",
        "explanation": "Uses `<table>`, `<tr>`, `<th>`, `<td>` along with `rowspan` for vertical merging (e.g. Tea and Lunch breaks across days) and `colspan` for horizontal merging (e.g. 2-hour labs).",
        "viva": [
          "What is the difference between rowspan and colspan? — rowspan merges cells vertically across multiple rows; colspan merges cells horizontally across multiple columns.",
          "What is border-collapse: collapse? — It merges adjacent table cell borders into a single clean border.",
          "What is the semantic difference between <th> and <td>? — <th> represents header cells (bold and centered by default); <td> represents standard data cells."
        ]
      },
      {
        "number": 2,
        "question": "Accept a number from the user and write a PHP program to check whether it is prime. Display an appropriate result.",
        "language": "PHP",
        "code": "<!DOCTYPE html>\n<html>\n<head><title>Prime Number Checker</title></head>\n<body>\n  <h2>Prime Number Checker</h2>\n  <form method=\"POST\">\n    <label>Enter a number: <input type=\"number\" name=\"num\" required min=\"1\"></label>\n    <button type=\"submit\">Check Prime</button>\n  </form>\n\n<?php\nif ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['num'])) {\n    $n = (int)$_POST['num'];\n\n    if ($n <= 1) {\n        $isPrime = false;\n    } else {\n        $isPrime = true;\n        for ($i = 2; $i <= sqrt($n); $i++) {\n            if ($n % $i == 0) {\n                $isPrime = false;\n                break;\n            }\n        }\n    }\n\n    if ($isPrime) {\n        echo \"<p style='color:green;font-weight:bold;'>$n is a PRIME number.</p>\";\n    } else {\n        echo \"<p style='color:red;font-weight:bold;'>$n is NOT a prime number.</p>\";\n    }\n}\n?>\n</body>\n</html>",
        "explanation": "Checks divisibility from 2 up to `sqrt($n)`. If any divisor yields remainder 0, the number is composite.",
        "viva": [
          "Why is it sufficient to check divisibility up to sqrt(n)? — If a factor exists greater than sqrt(n), its corresponding pair factor must be less than or equal to sqrt(n).",
          "Why is 1 not considered a prime number? — By definition, a prime number has exactly two distinct positive divisors: 1 and itself.",
          "What does the break statement do? — It immediately terminates the loop as soon as a factor is found."
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Student Portfolio</title>\n  <style>\n    body { margin: 0; font-family: Arial, sans-serif; display: flex; height: 100vh; background: #0f172a; color: white; }\n    aside { width: 220px; background: #1e293b; padding: 20px; display: flex; flex-direction: column; gap: 15px; }\n    aside h2 { font-size: 18px; color: #38bdf8; margin-top: 0; border-bottom: 1px solid #334155; padding-bottom: 10px; }\n    aside a { color: #cbd5e1; text-decoration: none; padding: 10px; border-radius: 6px; font-weight: bold; transition: 0.2s; }\n    aside a:hover { background: #334155; color: white; }\n    main { flex: 1; padding: 20px; display: flex; flex-direction: column; }\n    iframe { flex: 1; width: 100%; border: 1px solid #334155; border-radius: 8px; background: white; }\n  </style>\n</head>\n<body>\n  <aside>\n    <h2>MY PORTFOLIO</h2>\n    <a href=\"about.html\" target=\"portfolio_frame\">About Me</a>\n    <a href=\"education.html\" target=\"portfolio_frame\">Education</a>\n    <a href=\"projects.html\" target=\"portfolio_frame\">Projects</a>\n    <a href=\"contact.html\" target=\"portfolio_frame\">Contact</a>\n  </aside>\n  <main>\n    <iframe name=\"portfolio_frame\" src=\"about.html\"></iframe>\n  </main>\n</body>\n</html>",
        "explanation": "Uses `<iframe name='portfolio_frame'>` and hyperlinks with `target='portfolio_frame'` so that clicking any nav link loads the respective document inside the iframe without refreshing the main window.",
        "viva": [
          "How does the target attribute in an anchor tag connect to an iframe? — By matching the target attribute value to the name attribute of the target iframe.",
          "What are the advantages of using iframes in a portfolio? — It allows modular pages to be loaded in a persistent frame layout without full-page reloads.",
          "What is the default src attribute in an iframe? — It defines the initial webpage document loaded into the iframe when the parent page first opens."
        ],
        "files": [
          {
            "name": "portfolio.html",
            "code": "<!DOCTYPE html>\n<html>\n<head>\n  <title>Portfolio Frame</title>\n  <style>\n    body { font-family: Arial; margin: 0; display: flex; height: 100vh; }\n    nav { width: 200px; background: #2c3e50; padding: 20px; }\n    nav a { display: block; color: white; text-decoration: none; padding: 10px; margin-bottom: 5px; }\n    nav a:hover { background: #34495e; }\n    iframe { flex: 1; border: none; }\n  </style>\n</head>\n<body>\n  <nav>\n    <a href=\"about.html\" target=\"contentFrame\">About</a>\n    <a href=\"education.html\" target=\"contentFrame\">Education</a>\n    <a href=\"projects.html\" target=\"contentFrame\">Projects</a>\n    <a href=\"contact.html\" target=\"contentFrame\">Contact</a>\n  </nav>\n  <iframe name=\"contentFrame\" src=\"about.html\"></iframe>\n</body>\n</html>"
          },
          {
            "name": "about.html",
            "code": "<!DOCTYPE html>\n<html>\n<body style=\"font-family:Arial;padding:25px;color:#333;\">\n  <h2>About Me</h2>\n  <p>Hello! I am a final-year Computer Science student passionate about Full-Stack Web Development, Cloud Computing, and open-source software.</p>\n  <p><strong>Technical Skills:</strong> HTML5, CSS3, JavaScript, PHP, MySQL, Node.js, Git.</p>\n</body>\n</html>"
          },
          {
            "name": "education.html",
            "code": "<!DOCTYPE html>\n<html>\n<body style=\"font-family:Arial;padding:25px;color:#333;\">\n  <h2>Educational Qualifications</h2>\n  <table border=\"1\" cellpadding=\"8\" style=\"border-collapse:collapse;width:100%;\">\n    <tr style=\"background:#eee;\"><th>Degree / Course</th><th>Institution</th><th>Year</th><th>CGPA / %</th></tr>\n    <tr><td>B.Tech (CSE)</td><td>ABC Institute of Technology</td><td>2023 - 2027</td><td>8.9 CGPA</td></tr>\n    <tr><td>Intermediate (MPC)</td><td>State Junior College</td><td>2021 - 2023</td><td>96%</td></tr>\n    <tr><td>Secondary School (SSC)</td><td>St. Paul's High School</td><td>2021</td><td>9.8 GPA</td></tr>\n  </table>\n</body>\n</html>"
          },
          {
            "name": "projects.html",
            "code": "<!DOCTYPE html>\n<html>\n<body style=\"font-family:Arial;padding:25px;color:#333;\">\n  <h2>My Projects</h2>\n  <div style=\"border-left:4px solid #3498db;padding:10px;margin-bottom:15px;background:#f9f9f9;\">\n    <h3>1. WT Lab Practice Studio</h3>\n    <p>An offline-ready progressive web app for students to practice all 40 question sets with live code editor and execution preview.</p>\n  </div>\n  <div style=\"border-left:4px solid #2ecc71;padding:10px;margin-bottom:15px;background:#f9f9f9;\">\n    <h3>2. Online Bookstore Portal</h3>\n    <p>PHP and MySQL full-stack web application featuring user authentication, catalog browsing, shopping cart, and order receipts.</p>\n  </div>\n</body>\n</html>"
          },
          {
            "name": "contact.html",
            "code": "<!DOCTYPE html>\n<html>\n<body style=\"font-family:Arial;padding:25px;color:#333;\">\n  <h2>Contact Information</h2>\n  <p><strong>Email:</strong> student@abctech.edu</p>\n  <p><strong>LinkedIn:</strong> linkedin.com/in/student-profile</p>\n  <p><strong>GitHub:</strong> github.com/student-dev</p>\n  <p><strong>Location:</strong> Hyderabad, Telangana, India</p>\n</body>\n</html>"
          }
        ]
      },
      {
        "number": 2,
        "question": "Accept a number and define a PHP function to calculate its factorial using an iterative or recursive approach. Display the result.",
        "language": "PHP",
        "code": "<!DOCTYPE html>\n<html>\n<head><title>Factorial in PHP</title></head>\n<body>\n  <h2>Factorial Calculator</h2>\n  <form method=\"POST\">\n    <label>Enter a number (0-20): <input type=\"number\" name=\"num\" min=\"0\" max=\"20\" required value=\"5\"></label>\n    <button type=\"submit\">Calculate Factorial</button>\n  </form>\n\n<?php\nfunction factorial($n) {\n    if ($n <= 1) {\n        return 1;\n    }\n    return $n * factorial($n - 1);\n}\n\nif ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['num'])) {\n    $num = (int)$_POST['num'];\n    $result = factorial($num);\n    echo \"<h3>Result:</h3>\";\n    echo \"<p>Factorial of <strong>$num</strong> ($num!) is: <strong>$result</strong></p>\";\n}\n?>\n</body>\n</html>",
        "explanation": "Defines a recursive PHP function `factorial($n)`. Base case returns 1 when `$n <= 1`, and recursive step returns `$n * factorial($n - 1)`.",
        "viva": [
          "What is the base case in a recursive function? — The termination condition that prevents infinite function calls by returning an immediate value.",
          "What happens if there is no base case in recursion? — It causes a stack overflow error due to maximum recursion depth exhaustion.",
          "Can factorial also be implemented iteratively? — Yes, using a for or while loop accumulating products from 1 through n."
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Four Frame Web Layout</title>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body { font-family: Arial, sans-serif; display: grid; grid-template-rows: 80px 1fr 40px; grid-template-columns: 200px 1fr; height: 100vh; }\n    #top { grid-column: 1 / -1; background: #1e3a8a; color: white; display: flex; align-items: center; justify-content: space-between; padding: 0 20px; }\n    #left { background: #f1f5f9; border-right: 2px solid #cbd5e1; padding: 20px 15px; }\n    #left a { display: block; color: #1e293b; text-decoration: none; padding: 8px 12px; margin-bottom: 8px; border-radius: 4px; font-weight: bold; }\n    #left a:hover { background: #cbd5e1; }\n    #center { padding: 25px; overflow-y: auto; background: white; }\n    #bottom { grid-column: 1 / -1; background: #0f172a; color: #94a3b8; display: flex; align-items: center; justify-content: center; font-size: 13px; }\n  </style>\n</head>\n<body>\n  <header id=\"top\">\n    <h2>WT University Portal</h2>\n    <span>Academic Year 2026-27</span>\n  </header>\n\n  <nav id=\"left\">\n    <a href=\"center.html\" target=\"center_frame\">Home Overview</a>\n    <a href=\"courses.html\" target=\"center_frame\">Course Catalog</a>\n    <a href=\"faculty.html\" target=\"center_frame\">Faculty List</a>\n  </nav>\n\n  <iframe id=\"center\" name=\"center_frame\" src=\"center.html\" style=\"border:none;width:100%;height:100%;\"></iframe>\n\n  <footer id=\"bottom\">\n    <p>&copy; 2026 WT University. All rights reserved | Approved by AICTE</p>\n  </footer>\n</body>\n</html>",
        "explanation": "Implements a standard 4-section layout (Top header, Left navigation, Center content, Bottom footer) using modern responsive CSS Grid and target-named iframes for seamless multi-page browsing.",
        "viva": [
          "Why is CSS Grid or Flexbox preferred over deprecated HTML <frameset>? — <frameset> is obsolete in HTML5 due to accessibility, bookmarking, and mobile responsiveness limitations.",
          "What does grid-column: 1 / -1 accomplish? — It spans the element across all columns from the first to the last column line.",
          "How does content update in the center without reloading the top and left panels? — By targeting the center iframe using the link's target attribute."
        ],
        "files": [
          {
            "name": "frames.html",
            "code": "<!DOCTYPE html>\n<html>\n<head>\n  <title>Frame Layout</title>\n  <style>\n    body { margin:0; display:grid; grid-template-rows:70px 1fr 35px; grid-template-columns:180px 1fr; height:100vh; }\n    header { grid-column: 1/-1; background:#2c3e50; color:white; padding:15px; }\n    nav { background:#ecf0f1; padding:15px; border-right:1px solid #ccc; }\n    nav a { display:block; padding:8px; color:#333; text-decoration:none; }\n    iframe { width:100%; height:100%; border:none; }\n    footer { grid-column: 1/-1; background:#34495e; color:white; text-align:center; padding:8px; font-size:12px; }\n  </style>\n</head>\n<body>\n  <header><h2>College Portal</h2></header>\n  <nav>\n    <a href=\"center.html\" target=\"center\">Home</a>\n    <a href=\"courses.html\" target=\"center\">Courses</a>\n  </nav>\n  <iframe name=\"center\" src=\"center.html\"></iframe>\n  <footer>&copy; 2026 College Name. All rights reserved.</footer>\n</body>\n</html>"
          },
          {
            "name": "center.html",
            "code": "<!DOCTYPE html>\n<html>\n<body style=\"font-family:Arial;padding:20px;\">\n  <h2>Welcome to the Center Frame</h2>\n  <p>This is the main central viewing pane. Click any link in the left navigation bar to update this content dynamically.</p>\n</body>\n</html>"
          },
          {
            "name": "courses.html",
            "code": "<!DOCTYPE html>\n<html>\n<body style=\"font-family:Arial;padding:20px;\">\n  <h2>Available Courses</h2>\n  <ul>\n    <li>Web Technologies (CS601)</li>\n    <li>Database Management Systems (CS602)</li>\n    <li>Operating Systems (CS603)</li>\n  </ul>\n</body>\n</html>"
          }
        ]
      },
      {
        "number": 2,
        "question": "Declare an array and display its elements. Insert a new element, delete an element, sort the array and display the modified array using PHP array functions.",
        "language": "PHP",
        "code": "<!DOCTYPE html>\n<html>\n<head><title>PHP Array Operations</title></head>\n<body>\n<?php\necho \"<h2>PHP Array Operations</h2>\";\n\n$languages = [\"HTML\", \"CSS\", \"JavaScript\", \"Python\"];\necho \"<p><strong>Initial Array:</strong><br>\";\nprint_r($languages);\necho \"</p>\";\n\narray_push($languages, \"PHP\");\necho \"<p><strong>After Inserting 'PHP':</strong><br>\";\nprint_r($languages);\necho \"</p>\";\n\nunset($languages[1]); // removes 'CSS'\n$languages = array_values($languages);\necho \"<p><strong>After Deleting Index 1 ('CSS'):</strong><br>\";\nprint_r($languages);\necho \"</p>\";\n\nsort($languages);\necho \"<p><strong>After Sorting Alphabetically:</strong><br>\";\nprint_r($languages);\necho \"</p>\";\n\necho \"<h3>Final Formatted List:</h3><ul>\";\nforeach ($languages as $lang) {\n    echo \"<li>\" . htmlspecialchars($lang) . \"</li>\";\n}\necho \"</ul>\";\n?>\n</body>\n</html>",
        "explanation": "Demonstrates core PHP array operations: array declaration, `array_push()` for insertion, `unset()` for deletion, `array_values()` for reindexing, and `sort()` for ascending order sort.",
        "viva": [
          "What does array_values() do after unset()? — It re-indexes the numerical keys of an array from 0 upwards so there are no missing key holes.",
          "What is the difference between sort() and asort()? — sort() sorts values and resets keys; asort() sorts values while preserving key-value association.",
          "How do you find the number of elements in a PHP array? — Using the count() or sizeof() function."
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Interactive Image Gallery</title>\n  <style>\n    body { font-family: Arial, sans-serif; text-align: center; padding: 20px; background: #f8fafc; }\n    .gallery-container { max-width: 700px; margin: auto; background: white; padding: 25px; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }\n    .main-display { margin-bottom: 20px; }\n    #largeImg { width: 100%; max-height: 380px; object-fit: cover; border-radius: 8px; border: 2px solid #cbd5e1; }\n    #caption { font-size: 16px; font-weight: bold; color: #1e3a8a; margin-top: 10px; }\n    .thumbnails { display: flex; justify-content: center; gap: 12px; }\n    .thumb { width: 90px; height: 65px; object-fit: cover; border-radius: 6px; cursor: pointer; border: 2px solid transparent; transition: 0.2s; }\n    .thumb:hover, .thumb.active { border-color: #2563eb; transform: scale(1.05); }\n  </style>\n</head>\n<body>\n  <div class=\"gallery-container\">\n    <h2>Campus Photo Gallery</h2>\n    \n    <div class=\"main-display\">\n      <img id=\"largeImg\" src=\"https://picsum.photos/id/1018/700/400\" alt=\"Main View\">\n      <div id=\"caption\">Central Academic Block & Campus Grounds</div>\n    </div>\n\n    <div class=\"thumbnails\">\n      <img class=\"thumb active\" src=\"https://picsum.photos/id/1018/200/150\" alt=\"Central Academic Block & Campus Grounds\" onclick=\"showImage(this)\">\n      <img class=\"thumb\" src=\"https://picsum.photos/id/1015/200/150\" alt=\"River Valley Botanical Gardens\" onclick=\"showImage(this)\">\n      <img class=\"thumb\" src=\"https://picsum.photos/id/1019/200/150\" alt=\"Technology Research Centre\" onclick=\"showImage(this)\">\n      <img class=\"thumb\" src=\"https://picsum.photos/id/1016/200/150\" alt=\"Digital Library & Auditorium\" onclick=\"showImage(this)\">\n    </div>\n  </div>\n\n  <script>\n    function showImage(thumb) {\n      document.getElementById('largeImg').src = thumb.src.replace('200/150', '700/400');\n      document.getElementById('caption').textContent = thumb.alt;\n      document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));\n      thumb.classList.add('active');\n    }\n  </script>\n</body>\n</html>",
        "explanation": "Uses JavaScript event handler `onclick='showImage(this)'` to dynamically update the `src` and caption of the large image element.",
        "viva": [
          "What is the advantage of using thumbnail images? — Thumbnails load faster, saving bandwidth and improving initial page render speed.",
          "What does the this keyword represent in an inline onclick event? — It references the exact DOM element that fired the event.",
          "How does object-fit: cover work in CSS? — It scales the image to maintain its aspect ratio while filling the element's entire box."
        ]
      },
      {
        "number": 2,
        "question": "Create a login form with username and password fields. Validate the submitted credentials in PHP and display a success or failure message.",
        "language": "PHP",
        "code": "<?php\nsession_start();\n$message = \"\";\n$statusClass = \"\";\n\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\") {\n    $username = trim($_POST[\"username\"] ?? \"\");\n    $password = trim($_POST[\"password\"] ?? \"\");\n\n    // Predefined credentials for lab testing\n    $validUser = \"student\";\n    $validPass = \"wtlab2026\";\n\n    if ($username === $validUser && $password === $validPass) {\n        $_SESSION[\"authenticated_user\"] = $username;\n        $message = \"Login successful! Welcome, \" . htmlspecialchars($username) . \".\";\n        $statusClass = \"success\";\n    } else {\n        $message = \"Invalid username or password. Please try again.\";\n        $statusClass = \"error\";\n    }\n}\n?>\n<!DOCTYPE html>\n<html>\n<head>\n  <title>PHP User Login</title>\n  <style>\n    body { font-family: Arial; background: #f1f5f9; padding: 30px; }\n    .card { max-width: 380px; margin: auto; background: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.08); }\n    h2 { text-align: center; color: #1e3a8a; }\n    .alert { padding: 10px; border-radius: 4px; margin-bottom: 15px; font-size: 14px; }\n    .alert.success { background: #dcfce7; color: #15803d; border: 1px solid #86efac; }\n    .alert.error { background: #fee2e2; color: #b91c1c; border: 1px solid #fca5a5; }\n    label { display: block; font-weight: bold; margin: 10px 0 5px; }\n    input { width: 100%; padding: 8px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 4px; }\n    button { width: 100%; padding: 10px; background: #2563eb; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; margin-top: 15px; }\n    .hint { font-size: 12px; color: #64748b; margin-top: 10px; text-align: center; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Portal Login</h2>\n    <?php if ($message): ?>\n      <div class=\"alert <?= $statusClass ?>\"><?= $message ?></div>\n    <?php endif; ?>\n    <form method=\"POST\">\n      <label>Username:</label>\n      <input type=\"text\" name=\"username\" required placeholder=\"Enter username\">\n      <label>Password:</label>\n      <input type=\"password\" name=\"password\" required placeholder=\"Enter password\">\n      <button type=\"submit\">Sign In</button>\n    </form>\n    <div class=\"hint\">Demo credentials: <strong>student</strong> / <strong>wtlab2026</strong></div>\n  </div>\n</body>\n</html>",
        "explanation": "Starts session with `session_start()`, compares submitted credentials against authentic values, and displays styled conditional success/error banners.",
        "viva": [
          "Where is session data stored? — Session data is stored securely on the server; only a session ID cookie is stored on the client browser.",
          "What does session_destroy() do? — It removes all data associated with the current session on the server.",
          "Why is it insecure to pass passwords via GET? — GET variables are logged in browser history, server logs, and visible in plain text in the URL."
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>HTML5 Media Players</title>\n  <style>\n    body { font-family: Arial, sans-serif; max-width: 750px; margin: 20px auto; background: #f8fafc; color: #1e293b; padding: 20px; }\n    .card { background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }\n    h2 { color: #1e3a8a; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; }\n    video, audio { width: 100%; border-radius: 6px; margin-top: 10px; }\n    .playlist { display: flex; gap: 10px; margin-top: 12px; }\n    .playlist button { padding: 8px 14px; border: 1px solid #2563eb; background: #eff6ff; color: #1d4ed8; border-radius: 4px; cursor: pointer; font-weight: bold; }\n    .playlist button:hover { background: #2563eb; color: white; }\n  </style>\n</head>\n<body>\n  <h1>HTML5 Audio & Video Studio</h1>\n\n  <div class=\"card\">\n    <h2>1. HTML5 Video Player</h2>\n    <video id=\"videoPlayer\" controls poster=\"https://picsum.photos/id/1018/700/400\">\n      <source id=\"videoSource\" src=\"https://www.w3schools.com/html/mov_bbb.mp4\" type=\"video/mp4\">\n      Your browser does not support the video tag.\n    </video>\n    <div class=\"playlist\">\n      <button onclick=\"changeVideo('https://www.w3schools.com/html/mov_bbb.mp4', 'Big Buck Bunny Animation')\">Clip 1: Animation</button>\n      <button onclick=\"changeVideo('https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', 'Flowering Garden')\">Clip 2: Garden</button>\n    </div>\n  </div>\n\n  <div class=\"card\">\n    <h2>2. HTML5 Audio Player</h2>\n    <audio id=\"audioPlayer\" controls>\n      <source id=\"audioSource\" src=\"https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3\" type=\"audio/mpeg\">\n      Your browser does not support the audio element.\n    </audio>\n    <div class=\"playlist\">\n      <button onclick=\"changeAudio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3')\">Audio 1: T-Rex Roar</button>\n      <button onclick=\"changeAudio('https://www.w3schools.com/html/horse.mp3')\">Audio 2: Horse Sound</button>\n    </div>\n  </div>\n\n  <script>\n    function changeVideo(url, title) {\n      const v = document.getElementById('videoPlayer');\n      document.getElementById('videoSource').src = url;\n      v.load();\n      v.play();\n    }\n    function changeAudio(url) {\n      const a = document.getElementById('audioPlayer');\n      document.getElementById('audioSource').src = url;\n      a.load();\n      a.play();\n    }\n  </script>\n</body>\n</html>",
        "explanation": "Uses HTML5 `<video controls>` and `<audio controls>` elements with `<source>` children and JavaScript functions to load/switch media files dynamically.",
        "viva": [
          "What are the mandatory attributes for HTML5 video? — controls (for player UI) and source tags specifying src and mime type.",
          "What does the poster attribute do in video? — It displays a placeholder image before the user presses play.",
          "What does the preload attribute control? — Controls whether the browser buffers none, metadata, or auto when the page opens."
        ]
      },
      {
        "number": 2,
        "question": "Create a student registration form and use PHP with mysqli or PDO to connect to MySQL and insert the submitted student details.",
        "language": "PHP",
        "code": "<!DOCTYPE html>\n<html>\n<head><title>Student Registration to Database</title></head>\n<body style=\"font-family:Arial;padding:20px;\">\n  <h2>Student Registration (MySQL Insert)</h2>\n  \n  <form method=\"POST\" style=\"max-width:400px;border:1px solid #ccc;padding:15px;border-radius:6px;\">\n    <p><label>Roll Number: <input type=\"text\" name=\"roll_no\" required></label></p>\n    <p><label>Full Name: <input type=\"text\" name=\"name\" required></label></p>\n    <p><label>Department: <input type=\"text\" name=\"department\" required></label></p>\n    <p><label>Email: <input type=\"email\" name=\"email\" required></label></p>\n    <button type=\"submit\" name=\"register\">Register Student</button>\n  </form>\n\n<?php\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\" && isset($_POST[\"register\"])) {\n    $host = \"localhost\";\n    $user = \"root\";\n    $pass = \"\";\n    $db   = \"wt_lab\";\n\n    // 1. Establish connection\n    $conn = new mysqli($host, $user, $pass, $db);\n    if ($conn->connect_error) {\n        die(\"<p style='color:red;'>Connection failed: \" . $conn->connect_error . \"</p>\");\n    }\n\n    // 2. Prepare statement to prevent SQL Injection\n    $stmt = $conn->prepare(\"INSERT INTO students (roll_no, name, department, email) VALUES (?, ?, ?, ?)\");\n    $stmt->bind_param(\"ssss\", $roll, $name, $dept, $email);\n\n    $roll  = $_POST[\"roll_no\"];\n    $name  = $_POST[\"name\"];\n    $dept  = $_POST[\"department\"];\n    $email = $_POST[\"email\"];\n\n    // 3. Execute\n    if ($stmt->execute()) {\n        echo \"<p style='color:green;'>Student record successfully inserted into database!</p>\";\n    } else {\n        echo \"<p style='color:red;'>Insert error: \" . $stmt->error . \"</p>\";\n    }\n\n    $stmt->close();\n    $conn->close();\n}\n?>\n</body>\n</html>",
        "explanation": "Uses PHP `mysqli` with prepared statements (`prepare()`, `bind_param()`, `execute()`) to safely insert student records into MySQL.",
        "viva": [
          "Why use prepared statements instead of raw queries? — Prepared statements prevent SQL Injection attacks by parameterizing data separately from SQL syntax.",
          "What does 'ssss' mean in bind_param? — It specifies that all 4 incoming parameters are strings.",
          "How do you check for connection errors in mysqli? — By checking the $conn->connect_error property."
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>HTML5 Canvas Geometric Shapes</title>\n  <style>\n    body { font-family: Arial, sans-serif; text-align: center; padding: 20px; background: #f1f5f9; }\n    canvas { background: white; border: 2px solid #334155; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }\n    h2 { color: #1e293b; }\n  </style>\n</head>\n<body>\n  <h2>HTML5 Canvas 2D Graphics</h2>\n  <canvas id=\"myCanvas\" width=\"600\" height=\"350\"></canvas>\n\n  <script>\n    const canvas = document.getElementById(\"myCanvas\");\n    const ctx = canvas.getContext(\"2d\");\n\n    // 1. Rectangle with Fill & Stroke\n    ctx.fillStyle = \"#3b82f6\";\n    ctx.fillRect(40, 40, 140, 80);\n    ctx.lineWidth = 4;\n    ctx.strokeStyle = \"#1e3a8a\";\n    ctx.strokeRect(40, 40, 140, 80);\n    ctx.fillStyle = \"#1e3a8a\";\n    ctx.font = \"14px Arial\";\n    ctx.fillText(\"Rectangle\", 75, 145);\n\n    // 2. Circle (Arc)\n    ctx.beginPath();\n    ctx.arc(300, 80, 50, 0, 2 * Math.PI);\n    ctx.fillStyle = \"#10b981\";\n    ctx.fill();\n    ctx.lineWidth = 4;\n    ctx.strokeStyle = \"#065f46\";\n    ctx.stroke();\n    ctx.fillStyle = \"#065f46\";\n    ctx.fillText(\"Circle\", 285, 155);\n\n    // 3. Straight Line\n    ctx.beginPath();\n    ctx.moveTo(420, 50);\n    ctx.lineTo(550, 120);\n    ctx.lineWidth = 5;\n    ctx.strokeStyle = \"#ef4444\";\n    ctx.stroke();\n    ctx.fillStyle = \"#991b1b\";\n    ctx.fillText(\"Line\", 475, 145);\n\n    // 4. Triangle (Polygon)\n    ctx.beginPath();\n    ctx.moveTo(110, 200);\n    ctx.lineTo(50, 300);\n    ctx.lineTo(170, 300);\n    ctx.closePath();\n    ctx.fillStyle = \"#f59e0b\";\n    ctx.fill();\n    ctx.lineWidth = 3;\n    ctx.strokeStyle = \"#b45309\";\n    ctx.stroke();\n    ctx.fillStyle = \"#b45309\";\n    ctx.fillText(\"Triangle\", 90, 325);\n\n    // 5. Rounded / Semi-circle\n    ctx.beginPath();\n    ctx.arc(300, 250, 45, 0, Math.PI, false);\n    ctx.closePath();\n    ctx.fillStyle = \"#8b5cf6\";\n    ctx.fill();\n    ctx.strokeStyle = \"#5b21b6\";\n    ctx.lineWidth = 3;\n    ctx.stroke();\n    ctx.fillStyle = \"#5b21b6\";\n    ctx.fillText(\"Semicircle\", 265, 325);\n  </script>\n</body>\n</html>",
        "explanation": "Uses HTML5 `<canvas>` and 2D context (`canvas.getContext('2d')`) to draw primitives: `fillRect`, `strokeRect`, `arc(x,y,r,0,2*PI)`, and path-based lines.",
        "viva": [
          "What coordinate system does HTML5 Canvas use? — Origin (0,0) is at the top-left corner; x increases rightwards and y increases downwards.",
          "What is the purpose of beginPath() and closePath()? — beginPath() starts a new shape path; closePath() draws a straight line back to the start point.",
          "What is the difference between fill() and stroke()? — fill() colors the interior of the shape; stroke() outlines the border."
        ]
      },
      {
        "number": 2,
        "question": "Connect PHP to a MySQL database, retrieve all student records using SELECT and display them in an HTML table.",
        "language": "PHP",
        "code": "<!DOCTYPE html>\n<html>\n<head>\n  <title>Student Records</title>\n  <style>\n    body { font-family: Arial; padding: 25px; background: #f8fafc; }\n    h2 { color: #1e3a8a; }\n    table { width: 100%; border-collapse: collapse; background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }\n    th, td { border: 1px solid #cbd5e1; padding: 12px; text-align: left; }\n    th { background: #1e3a8a; color: white; }\n    tr:nth-child(even) { background: #f1f5f9; }\n  </style>\n</head>\n<body>\n  <h2>Student Database Records</h2>\n\n<?php\n$conn = new mysqli(\"localhost\", \"root\", \"\", \"wt_lab\");\nif ($conn->connect_error) {\n    die(\"<p style='color:red;'>Connection failed: \" . $conn->connect_error . \"</p>\");\n}\n\n$sql = \"SELECT id, roll_no, name, department, email FROM students\";\n$result = $conn->query($sql);\n\nif ($result && $result->num_rows > 0) {\n    echo \"<table>\";\n    echo \"<tr><th>ID</th><th>Roll No</th><th>Student Name</th><th>Department</th><th>Email</th></tr>\";\n    while ($row = $result->fetch_assoc()) {\n        echo \"<tr>\";\n        echo \"<td>\" . htmlspecialchars($row[\"id\"]) . \"</td>\";\n        echo \"<td>\" . htmlspecialchars($row[\"roll_no\"]) . \"</td>\";\n        echo \"<td>\" . htmlspecialchars($row[\"name\"]) . \"</td>\";\n        echo \"<td>\" . htmlspecialchars($row[\"department\"]) . \"</td>\";\n        echo \"<td>\" . htmlspecialchars($row[\"email\"]) . \"</td>\";\n        echo \"</tr>\";\n    }\n    echo \"</table>\";\n} else {\n    echo \"<p>No student records found in the database.</p>\";\n}\n\n$conn->close();\n?>\n</body>\n</html>",
        "explanation": "Connects to MySQL database with `new mysqli()`, executes SQL `SELECT`, iterates through records using `fetch_assoc()`, and renders each row in an HTML table.",
        "viva": [
          "What does fetch_assoc() return? — It returns an associative array representing the next row in the result set, or null when no more rows remain.",
          "What is the role of num_rows? — It provides the total count of rows returned by the SELECT query.",
          "Why is $conn->close() necessary? — It closes the database connection and frees up server resources."
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Engineering Book Catalogue</title>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 25px; background: #f8fafc; }\n    h2 { color: #1e3a8a; text-align: center; }\n    table { width: 95%; margin: auto; border-collapse: collapse; background: white; box-shadow: 0 4px 12px rgba(0,0,0,0.08); border-radius: 8px; overflow: hidden; }\n    th, td { padding: 14px; text-align: left; border-bottom: 1px solid #e2e8f0; vertical-align: middle; }\n    th { background: #1e3a8a; color: white; font-size: 15px; }\n    .cover { width: 60px; height: 80px; object-fit: cover; border-radius: 4px; border: 1px solid #cbd5e1; }\n    .price { font-weight: bold; color: #16a34a; font-size: 16px; }\n    .btn { background: #2563eb; color: white; border: none; padding: 8px 14px; border-radius: 4px; cursor: pointer; font-weight: bold; }\n    .btn:hover { background: #1d4ed8; }\n  </style>\n</head>\n<body>\n  <h2>Web & Computer Science Book Catalogue</h2>\n  <table>\n    <tr>\n      <th>Cover</th>\n      <th>Book Title</th>\n      <th>Author</th>\n      <th>Publisher</th>\n      <th>Price</th>\n      <th>Action</th>\n    </tr>\n    <tr>\n      <td><img class=\"cover\" src=\"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=120\" alt=\"Web Technologies\"></td>\n      <td><strong>Web Technologies: A Computer Science Perspective</strong></td>\n      <td>Jeffrey C. Jackson</td>\n      <td>Pearson Education</td>\n      <td class=\"price\">&#8377; 650</td>\n      <td><button class=\"btn\" onclick=\"addToCart('Web Technologies')\">Add to Cart</button></td>\n    </tr>\n    <tr>\n      <td><img class=\"cover\" src=\"https://images.unsplash.com/photo-1532012164546-f432f2e3777f?w=120\" alt=\"JavaScript Book\"></td>\n      <td><strong>JavaScript: The Definitive Guide</strong></td>\n      <td>David Flanagan</td>\n      <td>O'Reilly Media</td>\n      <td class=\"price\">&#8377; 850</td>\n      <td><button class=\"btn\" onclick=\"addToCart('JavaScript Definitive Guide')\">Add to Cart</button></td>\n    </tr>\n    <tr>\n      <td><img class=\"cover\" src=\"https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=120\" alt=\"PHP MySQL\"></td>\n      <td><strong>PHP and MySQL Web Development</strong></td>\n      <td>Luke Welling</td>\n      <td>Addison-Wesley</td>\n      <td class=\"price\">&#8377; 720</td>\n      <td><button class=\"btn\" onclick=\"addToCart('PHP & MySQL Web Dev')\">Add to Cart</button></td>\n    </tr>\n  </table>\n\n  <script>\n    function addToCart(title) {\n      alert(title + \" has been added to your cart!\");\n    }\n  </script>\n</body>\n</html>",
        "explanation": "Uses HTML `<table>` with formatted headers, book cover thumbnail images, price formatting, and interactive 'Add to Cart' action buttons.",
        "viva": [
          "What is &#8377; in HTML? — It is the HTML character entity code for the Indian Rupee (₹) currency symbol.",
          "Why is vertical-align: middle useful in table cells? — It centers images, text, and buttons vertically across rows.",
          "How can this table be integrated with a shopping cart backend? — By wrapping the table in a form or using JavaScript fetch/AJAX to update server sessions."
        ]
      },
      {
        "number": 2,
        "question": "Create a PHP interface to select a student by ID and perform UPDATE and DELETE operations on the corresponding MySQL record.",
        "language": "PHP",
        "code": "<!DOCTYPE html>\n<html>\n<head><title>Update & Delete Student Record</title></head>\n<body style=\"font-family:Arial;padding:25px;\">\n  <h2>Student Record Management (UPDATE / DELETE)</h2>\n\n<?php\n$conn = new mysqli(\"localhost\", \"root\", \"\", \"wt_lab\");\nif ($conn->connect_error) die(\"Database error: \" . $conn->connect_error);\n\n// 1. Handle Delete\nif (isset($_POST['action']) && $_POST['action'] === 'delete') {\n    $id = (int)$_POST['id'];\n    $stmt = $conn->prepare(\"DELETE FROM students WHERE id = ?\");\n    $stmt->bind_param(\"i\", $id);\n    if ($stmt->execute()) echo \"<p style='color:green;'>Record ID $id deleted successfully!</p>\";\n    $stmt->close();\n}\n\n// 2. Handle Update\nif (isset($_POST['action']) && $_POST['action'] === 'update') {\n    $id    = (int)$_POST['id'];\n    $dept  = $_POST['department'];\n    $email = $_POST['email'];\n    $stmt = $conn->prepare(\"UPDATE students SET department = ?, email = ? WHERE id = ?\");\n    $stmt->bind_param(\"ssi\", $dept, $email, $id);\n    if ($stmt->execute()) echo \"<p style='color:green;'>Record ID $id updated successfully!</p>\";\n    $stmt->close();\n}\n?>\n\n  <form method=\"POST\" style=\"border:1px solid #ccc;padding:15px;max-width:400px;margin-bottom:20px;\">\n    <h3>Select Student ID to Modify</h3>\n    <p><label>Student ID: <input type=\"number\" name=\"id\" required></label></p>\n    <p><label>New Department: <input type=\"text\" name=\"department\" placeholder=\"For update\"></label></p>\n    <p><label>New Email: <input type=\"email\" name=\"email\" placeholder=\"For update\"></label></p>\n    <button type=\"submit\" name=\"action\" value=\"update\" style=\"background:#2563eb;color:white;padding:8px 12px;border:none;\">UPDATE Record</button>\n    <button type=\"submit\" name=\"action\" value=\"delete\" style=\"background:#dc2626;color:white;padding:8px 12px;border:none;\" onclick=\"return confirm('Confirm deletion?');\">DELETE Record</button>\n  </form>\n</body>\n</html>",
        "explanation": "Demonstrates MySQL `UPDATE` and `DELETE` operations using prepared statements conditioned on user form submission.",
        "viva": [
          "What is the danger of executing DELETE without a WHERE clause? — It will delete all records in the table permanently.",
          "What does onclick='return confirm()' do? — It prompts the user with a confirmation dialog before proceeding with destructive actions.",
          "What parameter type 'ssi' represents in bind_param? — Two string parameters followed by one integer parameter."
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Three CSS Methods Demonstration</title>\n  <!-- 1. External CSS Link (simulated via inline style for preview) -->\n  <link rel=\"stylesheet\" href=\"styles.css\">\n  \n  <!-- 2. Internal CSS (Embedded inside <style>) -->\n  <style>\n    body { font-family: 'Segoe UI', Tahoma, sans-serif; padding: 25px; background: #f8fafc; }\n    img.rounded-banner {\n      width: 100%;\n      max-width: 500px;\n      height: 200px;\n      object-fit: cover;\n      border-radius: 12px;\n      border: 3px solid #3b82f6;\n      box-shadow: 0 4px 10px rgba(0,0,0,0.15);\n    }\n    /* Fallback styles for external button if external file is missing */\n    .btn-action {\n      background-color: #2563eb;\n      color: #ffffff;\n      padding: 12px 24px;\n      font-size: 15px;\n      font-weight: bold;\n      border: none;\n      border-radius: 6px;\n      cursor: pointer;\n      transition: background-color 0.3s ease, transform 0.2s ease;\n    }\n    .btn-action:hover {\n      background-color: #1e40af;\n      transform: translateY(-2px);\n    }\n  </style>\n</head>\n<body>\n  <!-- 1. Inline CSS applied directly to heading -->\n  <h1 style=\"color: #1e3a8a; font-size: 28px; text-decoration: underline; letter-spacing: 1px;\">\n    Inline Styled Heading (style=\"color:#1e3a8a; ...\")\n  </h1>\n  <p>Notice the heading above receives styles directly through the <code>style</code> attribute.</p>\n\n  <!-- 2. Internal CSS applied to image -->\n  <h2>Internal Styled Image (<style> block)</h2>\n  <img class=\"rounded-banner\" src=\"https://picsum.photos/id/1015/600/300\" alt=\"Nature Banner\">\n\n  <!-- 3. External CSS applied to button -->\n  <h2>External Styled Button (styles.css)</h2>\n  <button class=\"btn-action\">Interactive Button with Hover Effect</button>\n</body>\n</html>",
        "explanation": "Demonstrates all three methods of applying CSS: 1. Inline via `style='...'` attribute, 2. Internal via `<style>` in `<head>`, and 3. External via `<link rel='stylesheet' href='styles.css'>`.",
        "viva": [
          "What is the priority order of CSS rules (Cascading Order)? — Inline styles have highest priority, followed by internal/external style sheets, and finally default browser styles.",
          "Why is external CSS considered a web development best practice? — It decouples presentation from markup, improves caching, and allows one stylesheet to format thousands of pages.",
          "What does the :hover pseudo-class do? — It specifies styles that activate when the mouse cursor hovers over the element."
        ],
        "files": [
          {
            "name": "index.html",
            "code": "<!DOCTYPE html>\n<html>\n<head>\n  <title>Three CSS Methods</title>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n  <style>\n    /* Internal CSS for Images */\n    img { border-radius: 10px; border: 2px solid #2563eb; }\n  </style>\n</head>\n<body style=\"font-family: Arial; padding: 20px;\">\n  <!-- Inline CSS -->\n  <h1 style=\"color: #1e3a8a; text-decoration: underline;\">1. Inline Styled Heading</h1>\n  \n  <!-- Internal CSS -->\n  <h3>2. Internal Styled Image:</h3>\n  <img src=\"https://picsum.photos/id/1018/300/150\" alt=\"Campus\">\n\n  <!-- External CSS -->\n  <h3>3. External Styled Button:</h3>\n  <button class=\"custom-btn\">External CSS Button</button>\n</body>\n</html>"
          },
          {
            "name": "styles.css",
            "code": "/* styles.css - External Stylesheet */\n.custom-btn {\n  background-color: #2563eb;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 6px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: 0.3s;\n}\n\n.custom-btn:hover {\n  background-color: #1e40af;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0,0,0,0.2);\n}"
          }
        ]
      },
      {
        "number": 2,
        "question": "Develop a PHP login system that creates a session after successful authentication, protects the home page and destroys the session on logout.",
        "language": "PHP",
        "code": "<?php\nsession_start();\n\n// Handle Logout\nif (isset($_GET['action']) && $_GET['action'] === 'logout') {\n    session_unset();\n    session_destroy();\n    header(\"Location: ?\");\n    exit();\n}\n\n// Handle Login\n$error = \"\";\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\" && isset($_POST['login'])) {\n    $u = $_POST['username'] ?? '';\n    $p = $_POST['password'] ?? '';\n    if ($u === \"admin\" && $p === \"secret123\") {\n        $_SESSION['user'] = $u;\n        $_SESSION['login_time'] = date(\"H:i:s\");\n    } else {\n        $error = \"Invalid username or password!\";\n    }\n}\n?>\n<!DOCTYPE html>\n<html>\n<head><title>Session Authentication</title></head>\n<body style=\"font-family:Arial;padding:25px;\">\n<?php if (!isset($_SESSION['user'])): ?>\n  <div style=\"max-width:350px;border:1px solid #ccc;padding:20px;border-radius:8px;\">\n    <h2>Secure Login</h2>\n    <?php if ($error) echo \"<p style='color:red;'>$error</p>\"; ?>\n    <form method=\"POST\">\n      <p><label>Username: <input type=\"text\" name=\"username\" required></label></p>\n      <p><label>Password: <input type=\"password\" name=\"password\" required></label></p>\n      <button type=\"submit\" name=\"login\" style=\"background:#2563eb;color:white;padding:8px 14px;border:none;\">Sign In</button>\n    </form>\n    <p style=\"font-size:12px;color:#666;\">Credentials: <strong>admin</strong> / <strong>secret123</strong></p>\n  </div>\n<?php else: ?>\n  <div style=\"max-width:500px;background:#f0fdf4;border:1px solid #86efac;padding:25px;border-radius:8px;\">\n    <h2>Welcome to Protected Dashboard!</h2>\n    <p>Logged in as: <strong><?= htmlspecialchars($_SESSION['user']) ?></strong></p>\n    <p>Session started at: <?= htmlspecialchars($_SESSION['login_time']) ?></p>\n    <p><a href=\"?action=logout\" style=\"color:red;font-weight:bold;\">Log out of session</a></p>\n  </div>\n<?php endif; ?>\n</body>\n</html>",
        "explanation": "Protects authorized pages using `$_SESSION['user']`. Destroys the session upon logout with `session_unset()` and `session_destroy()`.",
        "viva": [
          "What is the difference between session_unset() and session_destroy()? — session_unset() frees all session variables currently registered; session_destroy() destroys all data registered to the session on the storage handler.",
          "Why must session_start() be called at the very top of each PHP script? — It sends HTTP cookie headers to the browser which must occur before any HTML output.",
          "How can a protected page redirect unauthenticated visitors? — By checking !isset($_SESSION['user']) and issuing a header('Location: login.php') call."
        ],
        "files": [
          {
            "name": "login.php",
            "code": "<?php\nsession_start();\nif ($_POST['username'] === 'admin' && $_POST['password'] === '1234') {\n    $_SESSION['user'] = $_POST['username'];\n    header(\"Location: dashboard.php\");\n    exit();\n}\n?>\n<form method=\"POST\">\n  <h2>Login Page</h2>\n  <input type=\"text\" name=\"username\" placeholder=\"Username\"><br><br>\n  <input type=\"password\" name=\"password\" placeholder=\"Password\"><br><br>\n  <input type=\"submit\" value=\"Login\">\n</form>"
          },
          {
            "name": "dashboard.php",
            "code": "<?php\nsession_start();\nif (!isset($_SESSION['user'])) {\n    header(\"Location: login.php\");\n    exit();\n}\necho \"<h1>Welcome, \" . htmlspecialchars($_SESSION['user']) . \"</h1>\";\necho \"<p><a href='logout.php'>Logout</a></p>\";\n?>"
          },
          {
            "name": "logout.php",
            "code": "<?php\nsession_start();\nsession_unset();\nsession_destroy();\nheader(\"Location: login.php\");\nexit();\n?>"
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>User Profile Card</title>\n  <style>\n    body { font-family: 'Segoe UI', Tahoma, sans-serif; background: #0f172a; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; }\n    .profile-card {\n      background: #1e293b;\n      color: white;\n      width: 320px;\n      border-radius: 16px;\n      padding: 30px 20px;\n      text-align: center;\n      border: 2px solid #334155;\n      box-shadow: 0 10px 25px rgba(0,0,0,0.4);\n      transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;\n    }\n    .profile-card:hover {\n      transform: translateY(-8px);\n      box-shadow: 0 15px 35px rgba(59, 130, 246, 0.3);\n      border-color: #3b82f6;\n    }\n    .photo {\n      width: 110px;\n      height: 110px;\n      border-radius: 50%;\n      object-fit: cover;\n      border: 3px solid #38bdf8;\n      box-shadow: 0 0 15px rgba(56, 189, 248, 0.4);\n      transition: transform 0.3s ease;\n    }\n    .profile-card:hover .photo {\n      transform: scale(1.06);\n    }\n    h2 { margin: 15px 0 5px; font-size: 22px; color: #f8fafc; }\n    .role { color: #38bdf8; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; }\n    .desc { font-size: 14px; color: #94a3b8; line-height: 1.5; margin-bottom: 20px; }\n    .btn { background: #2563eb; color: white; border: none; padding: 10px 20px; border-radius: 20px; font-weight: bold; cursor: pointer; transition: 0.2s; }\n    .btn:hover { background: #1d4ed8; }\n  </style>\n</head>\n<body>\n  <div class=\"profile-card\">\n    <img class=\"photo\" src=\"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200\" alt=\"Profile Picture\">\n    <h2>Dr. Ananya Sharma</h2>\n    <div class=\"role\">Lead Full-Stack Architect</div>\n    <p class=\"desc\">Specializing in distributed web applications, cloud native architecture, and scalable Node.js microservices.</p>\n    <button class=\"btn\">View Profile</button>\n  </div>\n</body>\n</html>",
        "explanation": "Uses CSS `box-shadow`, `border-radius`, `transition: transform 0.3s ease`, and `:hover` pseudoclass for responsive micro-interactions.",
        "viva": [
          "What does box-shadow: 0 10px 25px rgba(0,0,0,0.4) represent? — Horizontal offset 0, vertical offset 10px, blur radius 25px, and 40% opaque black color.",
          "What does transform: translateY(-8px) do on hover? — It creates a realistic elevation effect by moving the card 8 pixels upward.",
          "What is the purpose of transition: transform 0.3s ease? — It prevents abrupt visual jumps by animating property changes smoothly over 300 milliseconds."
        ]
      },
      {
        "number": 2,
        "question": "Accept a user's name, store it in a cookie and read the cookie on a subsequent page visit to display a personalized greeting.",
        "language": "PHP",
        "code": "<?php\n$msg = \"\";\n// 1. Set cookie if submitted\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\" && isset($_POST['username'])) {\n    $name = trim($_POST['username']);\n    setcookie(\"user_name\", $name, time() + 3600, \"/\"); // valid for 1 hour\n    $_COOKIE['user_name'] = $name; // reflect immediately for display\n    $msg = \"Cookie has been stored in your browser!\";\n}\n?>\n<!DOCTYPE html>\n<html>\n<head><title>PHP Cookie Greeting</title></head>\n<body style=\"font-family:Arial;padding:25px;\">\n  <h2>Personalized Cookie Greeting</h2>\n\n<?php if (isset($_COOKIE['user_name'])): ?>\n  <div style=\"background:#eff6ff;padding:15px;border-left:4px solid #2563eb;max-width:400px;margin-bottom:15px;\">\n    <h3>Welcome back, <?= htmlspecialchars($_COOKIE['user_name']) ?>!</h3>\n    <p>Your name was read directly from browser cookie <code>user_name</code>.</p>\n  </div>\n<?php else: ?>\n  <p>No cookie found yet. Please enter your name below:</p>\n<?php endif; ?>\n\n  <form method=\"POST\" style=\"max-width:350px;\">\n    <label>Enter Name: <input type=\"text\" name=\"username\" required></label>\n    <button type=\"submit\" style=\"background:#2563eb;color:white;padding:6px 12px;border:none;\">Save Cookie</button>\n  </form>\n</body>\n</html>",
        "explanation": "Uses `setcookie('user_name', $name, time() + 3600, '/')` to set an HTTP cookie in the user's browser, and accesses it on subsequent requests via `$_COOKIE['user_name']`.",
        "viva": [
          "Why must setcookie() be called before any HTML output? — Cookies are sent via HTTP headers; headers cannot be modified once the response body starts.",
          "What does time() + 3600 specify? — The expiration timestamp in seconds from epoch (1 hour from current time).",
          "How do you delete a cookie in PHP? — By setting its expiration date in the past, e.g. setcookie('user_name', '', time() - 3600, '/')."
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Horizontal Navigation Bar</title>\n  <style>\n    body { font-family: Arial, sans-serif; margin: 0; background: #f1f5f9; }\n    .navbar {\n      background: #1e293b;\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding: 0 25px;\n      box-shadow: 0 4px 10px rgba(0,0,0,0.1);\n    }\n    .brand { color: #38bdf8; font-size: 20px; font-weight: bold; text-decoration: none; }\n    .nav-links { list-style: none; display: flex; margin: 0; padding: 0; }\n    .nav-links li a {\n      display: block;\n      color: #e2e8f0;\n      text-decoration: none;\n      padding: 18px 18px;\n      font-size: 15px;\n      font-weight: 500;\n      transition: background 0.25s, color 0.25s;\n    }\n    .nav-links li a:hover {\n      background: #334155;\n      color: #38bdf8;\n    }\n    .nav-links li a.active {\n      background: #0284c7;\n      color: white;\n    }\n    .content { padding: 40px; }\n  </style>\n</head>\n<body>\n  <nav class=\"navbar\">\n    <a href=\"#\" class=\"brand\">TechCorp</a>\n    <ul class=\"nav-links\">\n      <li><a href=\"#\" class=\"active\">Home</a></li>\n      <li><a href=\"#\">About</a></li>\n      <li><a href=\"#\">Services</a></li>\n      <li><a href=\"#\">Products</a></li>\n      <li><a href=\"#\">Contact</a></li>\n    </ul>\n  </nav>\n\n  <div class=\"content\">\n    <h1>Welcome to TechCorp</h1>\n    <p>Hover over the navigation links above to see smooth CSS background and color transitions.</p>\n  </div>\n</body>\n</html>",
        "explanation": "Uses CSS Flexbox (`display: flex`) on `<nav>` and `<ul>`, removes default list padding, and styles individual `<a>` tags with padding and `:hover` states.",
        "viva": [
          "Why use display: flex on navigation menus? — Flexbox easily aligns items horizontally, distributes space, and centers elements cleanly.",
          "What does text-decoration: none do? — It removes the default underline applied to HTML anchor links.",
          "How do you style the currently selected page link? — By applying a dedicated CSS class like .active with distinctive background or font weight."
        ]
      },
      {
        "number": 2,
        "question": "Create a feedback form for name, email and comments. Validate the input and store the feedback in a MySQL table using PHP.",
        "language": "PHP",
        "code": "<!DOCTYPE html>\n<html>\n<head><title>User Feedback Form</title></head>\n<body style=\"font-family:Arial;padding:25px;\">\n  <h2>Customer Feedback Form</h2>\n\n<?php\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\") {\n    $name     = trim($_POST[\"name\"] ?? \"\");\n    $email    = trim($_POST[\"email\"] ?? \"\");\n    $comments = trim($_POST[\"comments\"] ?? \"\");\n\n    if (empty($name) || empty($email) || empty($comments)) {\n        echo \"<p style='color:red;'>All fields are mandatory!</p>\";\n    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {\n        echo \"<p style='color:red;'>Please enter a valid email address.</p>\";\n    } else {\n        $conn = new mysqli(\"localhost\", \"root\", \"\", \"wt_lab\");\n        if ($conn->connect_error) {\n            die(\"Database error: \" . $conn->connect_error);\n        }\n\n        $stmt = $conn->prepare(\"INSERT INTO feedback (name, email, comments) VALUES (?, ?, ?)\");\n        $stmt->bind_param(\"sss\", $name, $email, $comments);\n\n        if ($stmt->execute()) {\n            echo \"<p style='color:green;font-weight:bold;'>Thank you! Your feedback has been recorded.</p>\";\n        } else {\n            echo \"<p style='color:red;'>Error saving feedback: \" . $stmt->error . \"</p>\";\n        }\n        $stmt->close();\n        $conn->close();\n    }\n}\n?>\n\n  <form method=\"POST\" style=\"max-width:400px;border:1px solid #ccc;padding:15px;border-radius:6px;\">\n    <p><label>Name: <input type=\"text\" name=\"name\" required style=\"width:100%;\"></label></p>\n    <p><label>Email: <input type=\"email\" name=\"email\" required style=\"width:100%;\"></label></p>\n    <p><label>Comments:<br><textarea name=\"comments\" rows=\"4\" required style=\"width:100%;\"></textarea></label></p>\n    <button type=\"submit\" style=\"background:#2563eb;color:white;padding:8px 16px;border:none;\">Submit Feedback</button>\n  </form>\n</body>\n</html>",
        "explanation": "Validates input using `filter_var($email, FILTER_VALIDATE_EMAIL)` and stores records into MySQL `feedback` table via prepared statements.",
        "viva": [
          "What does filter_var() do in PHP? — It filters and validates variables using native C-level filters like FILTER_VALIDATE_EMAIL.",
          "Why is input trimming (trim) necessary? — It strips accidental whitespace at the beginning and end of user input.",
          "What happens if MySQL server is down? — $conn->connect_error detects the failure and terminates execution safely."
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Responsive Flexbox Layout</title>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body { font-family: Arial, sans-serif; display: flex; flex-direction: column; min-height: 100vh; background: #f8fafc; }\n    header { background: #1e3a8a; color: white; padding: 20px; text-align: center; }\n    nav { background: #3b82f6; display: flex; gap: 15px; padding: 10px 20px; }\n    nav a { color: white; text-decoration: none; font-weight: bold; }\n    .main-wrap { display: flex; flex: 1; gap: 20px; padding: 20px; }\n    article { flex: 3; background: white; padding: 20px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.06); }\n    aside { flex: 1; background: #e2e8f0; padding: 20px; border-radius: 6px; }\n    footer { background: #0f172a; color: #94a3b8; text-align: center; padding: 15px; }\n\n    /* Responsive media query for mobile screens */\n    @media (max-width: 768px) {\n      .main-wrap { flex-direction: column; }\n      nav { flex-direction: column; }\n    }\n  </style>\n</head>\n<body>\n  <header><h1>Tech Portal Header</h1></header>\n  <nav><a href=\"#\">Home</a><a href=\"#\">Articles</a><a href=\"#\">Tutorials</a><a href=\"#\">Contact</a></nav>\n  <div class=\"main-wrap\">\n    <article>\n      <h2>Main Article Content</h2>\n      <p>This layout uses CSS Flexbox with flex: 3 for article and flex: 1 for sidebar. On screens smaller than 768px, media queries reorient flex-direction to column.</p>\n    </article>\n    <aside>\n      <h3>Sidebar</h3>\n      <p>Latest notices, news, and links.</p>\n    </aside>\n  </div>\n  <footer><p>&copy; 2026 Flexbox Design. All rights reserved.</p></footer>\n</body>\n</html>",
        "explanation": "Uses CSS Flexbox (`display: flex`, `flex-direction: column` and `row`, `flex: 3`, `flex: 1`) combined with `@media (max-width: 768px)` for mobile responsiveness.",
        "viva": [
          "What does flex: 3 mean relative to flex: 1? — It instructs the browser to allocate 3 parts of available free space to the article for every 1 part given to the sidebar.",
          "What does the meta viewport tag do? — It sets the viewport width to match device screen width to ensure correct mobile scaling.",
          "How does flex-direction: column change layout? — It stacks child elements vertically instead of placing them side by side."
        ]
      },
      {
        "number": 2,
        "question": "Create a PHP page to upload an image to the server. Provide a View button that displays the uploaded image on the webpage.",
        "language": "PHP",
        "code": "<!DOCTYPE html>\n<html>\n<head><title>PHP Image Upload</title></head>\n<body style=\"font-family:Arial;padding:25px;\">\n  <h2>Upload and View Image</h2>\n\n<?php\n$uploadedFile = \"\";\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\" && isset($_FILES[\"imageFile\"])) {\n    $file = $_FILES[\"imageFile\"];\n    $fileName = basename($file[\"name\"]);\n    $targetDir = \"uploads/\";\n    \n    if (!is_dir($targetDir)) {\n        mkdir($targetDir, 0777, true);\n    }\n    \n    $targetFilePath = $targetDir . time() . \"_\" . $fileName;\n    $fileType = strtolower(pathinfo($targetFilePath, PATHINFO_EXTENSION));\n\n    $allowed = [\"jpg\", \"jpeg\", \"png\", \"gif\"];\n    if (in_array($fileType, $allowed)) {\n        if (move_uploaded_file($file[\"tmp_name\"], $targetFilePath)) {\n            $uploadedFile = $targetFilePath;\n            echo \"<p style='color:green;'>Image uploaded successfully!</p>\";\n        } else {\n            echo \"<p style='color:red;'>Failed to move uploaded file.</p>\";\n        }\n    } else {\n        echo \"<p style='color:red;'>Only JPG, JPEG, PNG and GIF files allowed.</p>\";\n    }\n}\n?>\n\n  <form method=\"POST\" enctype=\"multipart/form-data\" style=\"margin-bottom:20px;\">\n    <input type=\"file\" name=\"imageFile\" required accept=\"image/*\">\n    <button type=\"submit\">Upload Image</button>\n  </form>\n\n<?php if ($uploadedFile): ?>\n  <div>\n    <h3>Uploaded Image View:</h3>\n    <img src=\"<?= htmlspecialchars($uploadedFile) ?>\" alt=\"Uploaded Image\" style=\"max-width:400px;border:2px solid #333;border-radius:6px;\">\n  </div>\n<?php endif; ?>\n</body>\n</html>",
        "explanation": "Uses `<form enctype='multipart/form-data'>`, handles uploads in PHP with `$_FILES`, validates extensions with `pathinfo()`, and saves using `move_uploaded_file()`.",
        "viva": [
          "Why is enctype='multipart/form-data' mandatory for file uploads? — Standard URL encoding cannot encode binary file content; multipart divides content into multiple MIME parts.",
          "Where are uploaded files temporarily stored before move_uploaded_file? — In the server's temporary directory defined by upload_tmp_dir in php.ini.",
          "How do you protect against malicious file uploads? — Verify MIME types, whitelist file extensions, limit file sizes, and rename files randomly."
        ],
        "files": [
          {
            "name": "upload.html",
            "code": "<!-- upload.html -->\n<form action=\"upload.php\" method=\"POST\" enctype=\"multipart/form-data\">\n  <label>Select image to upload:</label><br><br>\n  <input type=\"file\" name=\"imageFile\" accept=\"image/*\" required><br><br>\n  <input type=\"submit\" value=\"Upload Now\">\n</form>"
          },
          {
            "name": "upload.php",
            "code": "<?php\n// upload.php\nif (isset($_FILES['imageFile'])) {\n    $name = $_FILES['imageFile']['name'];\n    $tmp  = $_FILES['imageFile']['tmp_name'];\n    $dest = \"uploads/\" . basename($name);\n\n    if (move_uploaded_file($tmp, $dest)) {\n        echo \"<h3>Upload Successful!</h3>\";\n        echo \"<img src='$dest' style='max-width:300px;'><br>\";\n        echo \"<a href='$dest' target='_blank'>View Full Image</a>\";\n    } else {\n        echo \"Upload failed.\";\n    }\n}\n?>"
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>CSS Grid Responsive Webpage</title>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body { font-family: Arial, sans-serif; min-height: 100vh; background: #f8fafc; }\n    .grid-container {\n      display: grid;\n      grid-template-areas:\n        \"header  header\"\n        \"nav     nav\"\n        \"main    sidebar\"\n        \"footer  footer\";\n      grid-template-columns: 3fr 1fr;\n      grid-template-rows: auto auto 1fr auto;\n      min-height: 100vh;\n      gap: 15px;\n      padding: 15px;\n    }\n    header  { grid-area: header; background: #1e3a8a; color: white; padding: 20px; border-radius: 8px; }\n    nav     { grid-area: nav; background: #2563eb; color: white; padding: 12px 20px; border-radius: 8px; }\n    main    { grid-area: main; background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.06); }\n    aside   { grid-area: sidebar; background: #e2e8f0; padding: 20px; border-radius: 8px; }\n    footer  { grid-area: footer; background: #0f172a; color: white; text-align: center; padding: 15px; border-radius: 8px; }\n\n    @media (max-width: 768px) {\n      .grid-container {\n        grid-template-areas:\n          \"header\"\n          \"nav\"\n          \"main\"\n          \"sidebar\"\n          \"footer\";\n        grid-template-columns: 1fr;\n      }\n    }\n  </style>\n</head>\n<body>\n  <div class=\"grid-container\">\n    <header><h1>Header (grid-area: header)</h1></header>\n    <nav><strong>Navigation Bar</strong> — Links, menus and search</nav>\n    <main>\n      <h2>Main Content Section</h2>\n      <p>Demonstrating two-dimensional layouts using <code>grid-template-areas</code>. On mobile screens, the grid collapses to a single column.</p>\n    </main>\n    <aside>\n      <h3>Sidebar</h3>\n      <p>Widgets, notifications, and announcements.</p>\n    </aside>\n    <footer>&copy; 2026 CSS Grid Layout Standard</footer>\n  </div>\n</body>\n</html>",
        "explanation": "Uses CSS Grid `grid-template-areas` to assign named zones: `header`, `nav`, `main`, `sidebar`, `footer`. Switches to a single-column layout on viewports below 768px.",
        "viva": [
          "What is the difference between CSS Grid and Flexbox? — Flexbox is one-dimensional (row OR column); CSS Grid is two-dimensional (rows AND columns simultaneously).",
          "What does grid-template-areas accomplish? — It allows visual mapping of layout components using text names like ASCII art.",
          "What does 3fr 1fr mean? — fr is a fractional unit; 3fr gets 3/4th of available width and 1fr gets 1/4th."
        ]
      },
      {
        "number": 2,
        "question": "Create a PHP page to accept payment details and display the submitted details after processing. Maintain a session for 10 minutes and expire the payment page/session after the time limit.",
        "language": "PHP",
        "code": "<?php\nsession_start();\n\n$sessionTimeout = 600; // 10 minutes in seconds\n\n// Initialize or verify session expiration\nif (isset($_SESSION['session_start_time'])) {\n    $elapsed = time() - $_SESSION['session_start_time'];\n    if ($elapsed > $sessionTimeout) {\n        session_unset();\n        session_destroy();\n        die(\"<h2 style='color:red;'>Session Expired!</h2><p>Your 10-minute payment session has timed out for security. <a href='?'>Start New Payment</a></p>\");\n    }\n} else {\n    $_SESSION['session_start_time'] = time();\n}\n\n$processed = false;\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\" && isset($_POST['pay'])) {\n    $cardName = htmlspecialchars($_POST['card_name']);\n    $amount   = (float)$_POST['amount'];\n    $txnId    = \"TXN\" . rand(100000, 999999);\n    $processed = true;\n}\n?>\n<!DOCTYPE html>\n<html>\n<head><title>Secure Payment Session</title></head>\n<body style=\"font-family:Arial;padding:25px;\">\n  <h2>Payment Gateway (10-Minute Timeout Protection)</h2>\n  <p>Session active. Remaining time: <strong><?= max(0, $sessionTimeout - (time() - $_SESSION['session_start_time'])) ?> seconds</strong></p>\n\n<?php if (!$processed): ?>\n  <form method=\"POST\" style=\"max-width:380px;border:1px solid #ccc;padding:20px;border-radius:6px;\">\n    <p><label>Cardholder Name: <input type=\"text\" name=\"card_name\" required></label></p>\n    <p><label>Amount (₹): <input type=\"number\" name=\"amount\" required value=\"1500\"></label></p>\n    <p><label>Card Number: <input type=\"text\" maxlength=\"16\" placeholder=\"XXXX-XXXX-XXXX-XXXX\" required></label></p>\n    <button type=\"submit\" name=\"pay\" style=\"background:#16a34a;color:white;padding:10px;border:none;font-weight:bold;width:100%;\">Pay Now</button>\n  </form>\n<?php else: ?>\n  <div style=\"background:#f0fdf4;border:1px solid #86efac;padding:20px;border-radius:6px;max-width:400px;\">\n    <h3 style=\"color:#15803d;\">Payment Receipt</h3>\n    <p>Transaction ID: <strong><?= $txnId ?></strong></p>\n    <p>Cardholder: <strong><?= $cardName ?></strong></p>\n    <p>Amount Paid: <strong>₹ <?= number_format($amount, 2) ?></strong></p>\n    <p>Status: <strong>Successful</strong></p>\n  </div>\n<?php endif; ?>\n</body>\n</html>",
        "explanation": "Tracks session start timestamp via `$_SESSION['session_start_time']`. If `time() - $_SESSION['session_start_time'] > 600`, calls `session_destroy()` to invalidate the payment window.",
        "viva": [
          "Why do banking and payment portals implement session timeouts? — To prevent unauthorized account takeover if a user leaves a public or shared terminal unattended.",
          "What does time() return? — Current Unix epoch time in seconds.",
          "How can a client-side timer sync with PHP session timeout? — Using JavaScript setInterval() to countdown matching the server session duration."
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Responsive Login Form</title>\n  <style>\n    body { font-family: 'Segoe UI', Tahoma, sans-serif; background: #0f172a; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; }\n    .login-box {\n      background: #1e293b;\n      padding: 35px 30px;\n      border-radius: 12px;\n      width: 100%;\n      max-width: 380px;\n      box-shadow: 0 10px 30px rgba(0,0,0,0.5);\n      border: 1px solid #334155;\n    }\n    h2 { color: #f8fafc; text-align: center; margin-top: 0; margin-bottom: 25px; }\n    .form-group { margin-bottom: 18px; }\n    label { display: block; color: #94a3b8; font-size: 14px; font-weight: 500; margin-bottom: 6px; }\n    input[type=\"text\"], input[type=\"password\"] {\n      width: 100%;\n      padding: 12px 14px;\n      background: #0f172a;\n      border: 1px solid #475569;\n      border-radius: 6px;\n      color: white;\n      font-size: 15px;\n      box-sizing: border-box;\n      outline: none;\n      transition: border-color 0.2s, box-shadow 0.2s;\n    }\n    input[type=\"text\"]:focus, input[type=\"password\"]:focus {\n      border-color: #38bdf8;\n      box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.25);\n    }\n    .btn-group { display: flex; gap: 12px; margin-top: 25px; }\n    button {\n      flex: 1;\n      padding: 12px;\n      border-radius: 6px;\n      font-weight: bold;\n      cursor: pointer;\n      font-size: 14px;\n      border: none;\n      transition: 0.2s;\n    }\n    .btn-login { background: #0284c7; color: white; }\n    .btn-login:hover { background: #0369a1; }\n    .btn-reset { background: #334155; color: #cbd5e1; }\n    .btn-reset:hover { background: #475569; }\n  </style>\n</head>\n<body>\n  <div class=\"login-box\">\n    <h2>Student Portal</h2>\n    <form onsubmit=\"alert('Login submitted'); return false;\">\n      <div class=\"form-group\">\n        <label for=\"user\">Username</label>\n        <input type=\"text\" id=\"user\" required placeholder=\"Enter username\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"pass\">Password</label>\n        <input type=\"password\" id=\"pass\" required placeholder=\"Enter password\">\n      </div>\n      <div class=\"btn-group\">\n        <button type=\"submit\" class=\"btn-login\">Login</button>\n        <button type=\"reset\" class=\"btn-reset\">Reset</button>\n      </div>\n    </form>\n  </div>\n</body>\n</html>",
        "explanation": "Uses CSS `:focus` pseudo-class with `box-shadow` glow outline, border transitions, and Flexbox button alignment for a polished login experience.",
        "viva": [
          "What does the :focus pseudo-class represent? — It targets the element currently receiving keyboard or cursor focus.",
          "Why is outline: none dangerous without a custom replacement? — It harms accessibility for keyboard users; always supply an accessible focus ring via box-shadow or border.",
          "What does box-sizing: border-box do? — It includes padding and borders in the element's total width and height."
        ]
      },
      {
        "number": 2,
        "question": "Accept a number from the user and use PHP loops to generate and display its multiplication table from 1 to 10.",
        "language": "PHP",
        "code": "<!DOCTYPE html>\n<html>\n<head><title>Multiplication Table</title></head>\n<body style=\"font-family:Arial;padding:25px;\">\n  <h2>Multiplication Table Generator</h2>\n  <form method=\"POST\">\n    <label>Enter Number: <input type=\"number\" name=\"tableNum\" required value=\"7\"></label>\n    <button type=\"submit\">Generate Table</button>\n  </form>\n\n<?php\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\" && isset($_POST[\"tableNum\"])) {\n    $n = (int)$_POST[\"tableNum\"];\n    echo \"<h3>Multiplication Table for $n:</h3>\";\n    echo \"<table border='1' cellpadding='8' style='border-collapse:collapse;min-width:200px;'>\";\n    echo \"<tr style='background:#1e3a8a;color:white;'><th>Equation</th><th>Result</th></tr>\";\n    for ($i = 1; $i <= 10; $i++) {\n        $product = $n * $i;\n        echo \"<tr><td>$n &times; $i</td><td style='font-weight:bold;'>$product</td></tr>\";\n    }\n    echo \"</table>\";\n}\n?>\n</body>\n</html>",
        "explanation": "Uses a PHP `for ($i = 1; $i <= 10; $i++)` loop to calculate `$n * $i` and render the arithmetic multiplication table.",
        "viva": [
          "What is &times; in HTML? — It represents the mathematical multiplication symbol (×).",
          "How can the table range be customized? — By accepting a second parameter for the limit (e.g., up to 20).",
          "What happens if non-numeric input is supplied? — Type casting (int) converts invalid inputs to 0."
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>CSS Typography Demonstration</title>\n  <style>\n    body { font-family: sans-serif; background: #f8fafc; padding: 25px; }\n    h2 { color: #1e3a8a; }\n    \n    .p-serif {\n      font-family: 'Georgia', serif;\n      font-size: 18px;\n      font-weight: 400;\n      color: #334155;\n      background: #f1f5f9;\n      line-height: 1.8;\n      text-align: justify;\n      margin: 15px 0;\n      padding: 16px;\n      border-left: 4px solid #3b82f6;\n    }\n\n    .p-monospace {\n      font-family: 'Consolas', 'Courier New', monospace;\n      font-size: 14px;\n      font-weight: 600;\n      color: #047857;\n      background: #ecfdf5;\n      line-height: 1.6;\n      text-align: left;\n      margin: 15px 0;\n      padding: 14px;\n      border-radius: 6px;\n    }\n\n    .p-callout {\n      font-family: 'Trebuchet MS', Arial, sans-serif;\n      font-size: 20px;\n      font-weight: 700;\n      color: #b91c1c;\n      background: #fef2f2;\n      line-height: 1.4;\n      text-align: center;\n      margin: 20px 0;\n      padding: 20px;\n      border: 2px dashed #fca5a5;\n      border-radius: 8px;\n    }\n  </style>\n</head>\n<body>\n  <h2>CSS Paragraph Styling & Typography</h2>\n\n  <p class=\"p-serif\">\n    <strong>1. Serif & Justified Style:</strong> This paragraph uses Georgia serif typeface with a generous line-height of 1.8 and justified text alignment. Notice the soft slate background with prominent padding and margin spacing.\n  </p>\n\n  <p class=\"p-monospace\">\n    <strong>2. Monospace & Code Style:</strong> This paragraph applies Consolas monospace font with a deep emerald green color and 600 font weight. Ideal for displaying code snippets or terminal logs.\n  </p>\n\n  <p class=\"p-callout\">\n    3. Center-Aligned Callout Box: Highlighting important exam announcements with 20px bold font, red accent, and centered alignment!\n  </p>\n</body>\n</html>",
        "explanation": "Demonstrates CSS text properties: `font-family`, `font-size`, `font-weight`, `color`, `background`, `line-height`, `text-align`, `margin`, and `padding`.",
        "viva": [
          "What is the difference between margin and padding? — Margin is space outside an element's border; padding is space inside between the border and the content.",
          "What does line-height do? — It controls the vertical spacing between lines of text in a block element.",
          "Why provide fallback fonts in font-family? — If the first font is not installed on the client machine, the browser gracefully tries the next font in the list."
        ]
      },
      {
        "number": 2,
        "question": "Create an associative array containing five products and their prices. Use a loop to display each product with its price.",
        "language": "JavaScript",
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Product Price Catalog</title>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 25px; background: #f8fafc; }\n    h2 { color: #1e3a8a; }\n    table { width: 350px; border-collapse: collapse; background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }\n    th, td { border: 1px solid #cbd5e1; padding: 10px 14px; }\n    th { background: #1e3a8a; color: white; text-align: left; }\n    .price { color: #16a34a; font-weight: bold; text-align: right; }\n  </style>\n</head>\n<body>\n  <h2>E-Commerce Product Catalog</h2>\n  <div id=\"catalog\"></div>\n\n  <script>\n    // Associative Array / Object in JavaScript\n    const products = {\n      \"Mechanical Keyboard\": 3499,\n      \"Wireless Gaming Mouse\": 1899,\n      \"HD LED Monitor 24-inch\": 8999,\n      \"Noise Cancelling Headset\": 4299,\n      \"USB-C Fast Charging Hub\": 1299\n    };\n\n    let html = \"<table><tr><th>Product Name</th><th>Price (INR)</th></tr>\";\n\n    // Loop through associative array using Object.entries\n    for (const [name, price] of Object.entries(products)) {\n      html += `<tr><td>${name}</td><td class=\"price\">&#8377; ${price.toLocaleString()}</td></tr>`;\n    }\n    html += \"</table>\";\n\n    document.getElementById(\"catalog\").innerHTML = html;\n  </script>\n</body>\n</html>",
        "explanation": "Uses a JavaScript Object as an associative array and iterates through its key-value pairs using `Object.entries(products)` to generate table rows.",
        "viva": [
          "How do associative arrays work in JavaScript? — JavaScript objects function as associative arrays with string keys mapped to values.",
          "What does Object.entries() return? — An array of [key, value] pairs from the given object.",
          "What does toLocaleString() do on numbers? — It formats numbers with locale-specific thousands separators (e.g., 3,499)."
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>CSS Positioning Demonstration</title>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 20px; background: #f1f5f9; height: 1500px; /* enables scrolling to demonstrate fixed */ }\n    h2 { color: #1e3a8a; }\n    \n    .box { padding: 15px; border-radius: 6px; font-weight: bold; margin-bottom: 20px; color: white; }\n    \n    /* 1. Static */\n    .static-box { position: static; background: #64748b; }\n\n    /* 2. Relative */\n    .relative-box { position: relative; top: 15px; left: 30px; background: #0284c7; }\n\n    /* 3. Absolute within Relative Container */\n    .container { position: relative; height: 180px; background: #e2e8f0; border: 2px dashed #94a3b8; padding: 10px; margin-top: 30px; }\n    .absolute-box { position: absolute; bottom: 10px; right: 20px; background: #dc2626; }\n\n    /* 4. Fixed */\n    .fixed-box { position: fixed; bottom: 20px; left: 20px; background: #16a34a; z-index: 999; box-shadow: 0 4px 12px rgba(0,0,0,0.3); }\n  </style>\n</head>\n<body>\n  <h2>CSS Positioning Demonstration (Static, Relative, Absolute, Fixed)</h2>\n  \n  <div class=\"box static-box\">\n    1. position: static (Default normal document flow; unaffected by top/left)\n  </div>\n\n  <div class=\"box relative-box\">\n    2. position: relative (Offset from its normal position by top:15px, left:30px)\n  </div>\n\n  <div class=\"container\">\n    <p style=\"color:#475569;margin:0;\">Relative Parent Container (.container)</p>\n    <div class=\"box absolute-box\">\n      3. position: absolute (Positioned bottom:10px, right:20px relative to parent)\n    </div>\n  </div>\n\n  <div class=\"box fixed-box\">\n    4. position: fixed (Stays in viewport at bottom-left even when scrolling)\n  </div>\n</body>\n</html>",
        "explanation": "Demonstrates all 4 CSS positioning schemes: `static` (default), `relative` (offset from origin), `absolute` (offset from nearest positioned ancestor), and `fixed` (offset from viewport).",
        "viva": [
          "What is the difference between relative and absolute positioning? — Relative offsets from its normal flow position without removing its footprint; absolute removes the element from flow and positions relative to its nearest positioned ancestor.",
          "What happens if an absolute element has no positioned ancestor? — It positions itself relative to the initial containing block (the <html> document).",
          "What does z-index control? — The stack ordering of positioned elements along the z-axis (depth)."
        ]
      },
      {
        "number": 2,
        "question": "Write a PHP script to read the contents of a text file and display the content on a webpage.",
        "language": "PHP",
        "code": "<!DOCTYPE html>\n<html>\n<head><title>Read Text File in PHP</title></head>\n<body style=\"font-family:Arial;padding:25px;\">\n  <h2>File Reader in PHP</h2>\n\n<?php\n$filePath = \"notes.txt\";\n\n// Create sample file if it does not exist\nif (!file_exists($filePath)) {\n    $sampleData = \"Web Technologies Laboratory Notes:\n1. HTML provides document structure.\n2. CSS governs styling and responsiveness.\n3. JavaScript handles client-side reactivity.\n4. PHP & MySQL handle server-side processing.\";\n    file_put_contents($filePath, $sampleData);\n}\n\nif (file_exists($filePath)) {\n    echo \"<div style='background:#f8fafc;border:1px solid #cbd5e1;padding:15px;border-radius:6px;max-width:550px;'>\";\n    echo \"<h3>Contents of '<strong>$filePath</strong>':</h3>\";\n    \n    // Method 1: file_get_contents with nl2br\n    $content = file_get_contents($filePath);\n    echo \"<pre style='background:#1e293b;color:#f8fafc;padding:14px;border-radius:4px;overflow-x:auto;'>\" . htmlspecialchars($content) . \"</pre>\";\n    \n    echo \"<p style='font-size:13px;color:#64748b;'>File size: \" . filesize($filePath) . \" bytes</p>\";\n    echo \"</div>\";\n} else {\n    echo \"<p style='color:red;'>File could not be found.</p>\";\n}\n?>\n</body>\n</html>",
        "explanation": "Uses PHP `file_get_contents('notes.txt')` and `filesize()` to load local file content safely into HTML `<pre>` block.",
        "viva": [
          "What is the difference between file_get_contents() and fopen()/fgets()? — file_get_contents() reads the entire file into a string in memory; fopen()/fgets() reads line-by-line using file pointers.",
          "What does nl2br() do? — It inserts HTML <br> tags before all newlines (\n) in a string.",
          "How do you check if a file exists before reading? — Using the file_exists($path) function."
        ],
        "files": [
          {
            "name": "read_file.php",
            "code": "<?php\n// read_file.php\n$filename = \"notes.txt\";\nif (file_exists($filename)) {\n    $content = file_get_contents($filename);\n    echo \"<h2>File Contents:</h2>\";\n    echo \"<pre>\" . htmlspecialchars($content) . \"</pre>\";\n} else {\n    echo \"File not found.\";\n}\n?>"
          },
          {
            "name": "notes.txt",
            "code": "Web Technologies Laboratory Notes:\n1. HTML5 introduces semantic elements like <header>, <nav>, <main>, <article>, and <footer>.\n2. CSS Grid enables two-dimensional layouts, while Flexbox excels in one-dimensional flows.\n3. PHP superglobals include $_GET, $_POST, $_REQUEST, $_SESSION, and $_COOKIE."
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>CSS Selectors in Action</title>\n  <style>\n    /* 1. Element Selector */\n    body { font-family: Arial, sans-serif; background: #f1f5f9; padding: 25px; }\n    form { max-width: 420px; margin: auto; padding: 25px; background: white; border-radius: 8px; }\n\n    /* 2. Class Selector */\n    .field-group { margin-bottom: 16px; }\n\n    /* 3. ID Selector */\n    #userForm { border: 2px solid #2563eb; box-shadow: 0 4px 15px rgba(37,99,235,0.15); }\n\n    /* 4. Attribute Selector */\n    input[type=\"email\"] { border-left: 4px solid #10b981; }\n    input[type=\"text\"] { border-left: 4px solid #3b82f6; }\n\n    /* 5. Pseudo-Class Selectors */\n    input:focus {\n      outline: none;\n      border-color: #2563eb;\n      box-shadow: 0 0 8px rgba(37,99,235,0.25);\n    }\n    button:hover {\n      background-color: #1e40af;\n      cursor: pointer;\n    }\n\n    label { display: block; font-weight: bold; margin-bottom: 6px; color: #334155; }\n    input { width: 100%; padding: 9px; box-sizing: border-box; border: 1px solid #cbd5e1; border-radius: 4px; }\n    button { width: 100%; padding: 10px; background: #2563eb; color: white; border: none; border-radius: 4px; font-weight: bold; }\n  </style>\n</head>\n<body>\n  <form id=\"userForm\">\n    <h2 style=\"color:#1e3a8a;margin-top:0;\">Student Feedback</h2>\n    <div class=\"field-group\">\n      <label>Full Name:</label>\n      <input type=\"text\" placeholder=\"Styled via input[type='text']\">\n    </div>\n    <div class=\"field-group\">\n      <label>Email Address:</label>\n      <input type=\"email\" placeholder=\"Styled via input[type='email']\">\n    </div>\n    <button type=\"submit\">Submit (Styled via button:hover)</button>\n  </form>\n</body>\n</html>",
        "explanation": "Demonstrates 5 types of CSS selectors: element (`form, label`), class (`.field-group`), ID (`#userForm`), attribute (`input[type='email']`), and pseudo-class (`:focus, :hover`).",
        "viva": [
          "What is selector specificity? — Specificity determines which style takes precedence: Inline (1000) > ID (100) > Class/Attribute/Pseudo-class (10) > Element (1).",
          "What does an attribute selector like [type='email'] do? — It targets only input elements whose type attribute exactly equals email.",
          "What is the difference between a pseudo-class and a pseudo-element? — A pseudo-class (:hover, :focus) targets an element in a specific state; a pseudo-element (::before, ::after) targets a virtual sub-part of an element."
        ]
      },
      {
        "number": 2,
        "question": "Create a form to collect student name, roll number, course and email. Process the form using $_POST and display the submitted details.",
        "language": "PHP",
        "code": "<!DOCTYPE html>\n<html>\n<head><title>Student Profile POST Processing</title></head>\n<body style=\"font-family:Arial;padding:25px;\">\n  <h2>Student Information Form</h2>\n\n<?php\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\") {\n    $name    = htmlspecialchars($_POST[\"name\"] ?? \"\");\n    $roll    = htmlspecialchars($_POST[\"roll\"] ?? \"\");\n    $course  = htmlspecialchars($_POST[\"course\"] ?? \"\");\n    $email   = htmlspecialchars($_POST[\"email\"] ?? \"\");\n\n    echo \"<div style='background:#f0fdf4;border:1px solid #86efac;padding:18px;border-radius:6px;max-width:400px;margin-bottom:20px;'>\";\n    echo \"<h3 style='color:#15803d;margin-top:0;'>Submitted Student Profile</h3>\";\n    echo \"<p><strong>Name:</strong> $name</p>\";\n    echo \"<p><strong>Roll Number:</strong> $roll</p>\";\n    echo \"<p><strong>Course:</strong> $course</p>\";\n    echo \"<p><strong>Email:</strong> $email</p>\";\n    echo \"</div>\";\n}\n?>\n\n  <form method=\"POST\" style=\"max-width:380px;border:1px solid #cbd5e1;padding:18px;border-radius:6px;\">\n    <p><label>Student Name: <input type=\"text\" name=\"name\" required style=\"width:100%;\"></label></p>\n    <p><label>Roll Number: <input type=\"text\" name=\"roll\" required style=\"width:100%;\"></label></p>\n    <p><label>Course: \n      <select name=\"course\" required style=\"width:100%;padding:6px;\">\n        <option value=\"B.Tech Computer Science\">B.Tech Computer Science</option>\n        <option value=\"B.Tech Information Technology\">B.Tech Information Technology</option>\n        <option value=\"B.Tech Artificial Intelligence\">B.Tech Artificial Intelligence</option>\n      </select>\n    </label></p>\n    <p><label>Email Address: <input type=\"email\" name=\"email\" required style=\"width:100%;\"></label></p>\n    <button type=\"submit\" style=\"background:#2563eb;color:white;padding:9px 18px;border:none;border-radius:4px;cursor:pointer;\">Submit Details</button>\n  </form>\n</body>\n</html>",
        "explanation": "Receives data submitted via HTTP POST in PHP superglobal `$_POST`, extracts parameters safely, and formats them in an HTML profile card.",
        "viva": [
          "Why is POST preferred over GET for student registration? — POST does not expose student information in the browser address bar and has no practical size limits.",
          "What does $_SERVER['REQUEST_METHOD'] check? — It indicates whether the current request was initiated via GET, POST, PUT, or DELETE.",
          "How do you sanitize text before echoing in PHP? — Using htmlspecialchars() to prevent script injection."
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>CSS Transitions & Keyframe Animations</title>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 25px; background: #0f172a; color: white; }\n    h2 { color: #38bdf8; }\n    \n    /* 1. Button with Smooth Hover Transition */\n    .animated-btn {\n      background: #0284c7;\n      color: white;\n      font-size: 16px;\n      font-weight: bold;\n      padding: 12px 28px;\n      border: 2px solid #38bdf8;\n      border-radius: 8px;\n      cursor: pointer;\n      transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;\n    }\n    .animated-btn:hover {\n      background: #0369a1;\n      transform: translateY(-4px) scale(1.03);\n      box-shadow: 0 10px 20px rgba(56, 189, 248, 0.4);\n    }\n\n    /* 2. Keyframe Animation Track & Moving Element */\n    .track {\n      width: 100%;\n      height: 100px;\n      background: #1e293b;\n      border: 1px solid #334155;\n      border-radius: 8px;\n      margin-top: 30px;\n      position: relative;\n      overflow: hidden;\n    }\n    .orb {\n      width: 60px;\n      height: 60px;\n      background: linear-gradient(135deg, #f59e0b, #ef4444);\n      border-radius: 50%;\n      position: absolute;\n      top: 20px;\n      left: 10px;\n      box-shadow: 0 0 15px rgba(239, 68, 68, 0.7);\n      animation: moveAcross 4s ease-in-out infinite alternate;\n    }\n\n    @keyframes moveAcross {\n      0% {\n        left: 20px;\n        transform: scale(1);\n        background: linear-gradient(135deg, #f59e0b, #ef4444);\n      }\n      50% {\n        transform: scale(1.2);\n        background: linear-gradient(135deg, #8b5cf6, #ec4899);\n      }\n      100% {\n        left: calc(100% - 80px);\n        transform: scale(1);\n        background: linear-gradient(135deg, #10b981, #06b6d4);\n      }\n    }\n  </style>\n</head>\n<body>\n  <h2>CSS Transitions & @keyframes Animation</h2>\n  \n  <p>1. Button with hover transition (transform, background, shadow):</p>\n  <button class=\"animated-btn\">Hover Over Me</button>\n\n  <p style=\"margin-top: 30px;\">2. Moving Element using @keyframes animation:</p>\n  <div class=\"track\">\n    <div class=\"orb\"></div>\n  </div>\n</body>\n</html>",
        "explanation": "Uses CSS `transition` on button hover and `@keyframes moveAcross` to animate an element horizontally across the screen with `animation: moveAcross 4s infinite alternate`.",
        "viva": [
          "What is the difference between a CSS transition and an animation? — Transitions require a trigger (like :hover) to transition between two states; @keyframes animations run autonomously and support multi-stage keyframes (0% to 100%).",
          "What does infinite alternate do in CSS animation? — It loops the animation infinitely, playing forwards then reversing backwards smoothly.",
          "What does calc(100% - 80px) accomplish? — It dynamically subtracts the element's width and margin from the parent container width."
        ]
      },
      {
        "number": 2,
        "question": "Create a login form and validate the username and password against records stored in a MySQL database. Display an appropriate message.",
        "language": "PHP",
        "code": "<!DOCTYPE html>\n<html>\n<head><title>MySQL Login Validation</title></head>\n<body style=\"font-family:Arial;padding:25px;\">\n  <h2>User Authentication (MySQL Database)</h2>\n\n<?php\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\") {\n    $u = trim($_POST[\"username\"] ?? \"\");\n    $p = trim($_POST[\"password\"] ?? \"\");\n\n    $conn = new mysqli(\"localhost\", \"root\", \"\", \"wt_lab\");\n    if ($conn->connect_error) {\n        die(\"<p style='color:red;'>Connection failed: \" . $conn->connect_error . \"</p>\");\n    }\n\n    $stmt = $conn->prepare(\"SELECT id, username, password FROM users WHERE username = ?\");\n    $stmt->bind_param(\"s\", $u);\n    $stmt->execute();\n    $res = $stmt->get_result();\n\n    if ($row = $res->fetch_assoc()) {\n        // In production use password_verify($p, $row['password'])\n        if ($p === $row[\"password\"]) {\n            echo \"<p style='color:green;font-weight:bold;'>Login Successful! Welcome, \" . htmlspecialchars($u) . \".</p>\";\n        } else {\n            echo \"<p style='color:red;'>Invalid Password. Please try again.</p>\";\n        }\n    } else {\n        echo \"<p style='color:red;'>User not found in database.</p>\";\n    }\n\n    $stmt->close();\n    $conn->close();\n}\n?>\n\n  <form method=\"POST\" style=\"max-width:350px;border:1px solid #ccc;padding:20px;border-radius:6px;\">\n    <p><label>Username: <input type=\"text\" name=\"username\" required style=\"width:100%;\"></label></p>\n    <p><label>Password: <input type=\"password\" name=\"password\" required style=\"width:100%;\"></label></p>\n    <button type=\"submit\" style=\"background:#2563eb;color:white;padding:9px;width:100%;border:none;border-radius:4px;\">Log In</button>\n  </form>\n</body>\n</html>",
        "explanation": "Uses prepared statements to query MySQL table `users` by username and validates the password, displaying green success or red error notifications.",
        "viva": [
          "Why shouldn't passwords be stored as plain text in production? — They should be securely hashed using password_hash() and verified using password_verify().",
          "How does get_result() work with prepared statements? — It returns the mysqli_result object allowing fetch_assoc() iteration.",
          "What SQL error occurs if parameters aren't bound safely? — SQL injection vulnerability where inputs like ' OR '1'='1 can bypass login."
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Factorial with Validation</title>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 25px; background: #f8fafc; }\n    .box { max-width: 400px; background: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }\n    input { width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }\n    button { background: #2563eb; color: white; padding: 10px 18px; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; }\n    .res { margin-top: 15px; font-size: 16px; font-weight: bold; }\n    .error { color: #dc2626; }\n    .success { color: #16a34a; }\n  </style>\n</head>\n<body>\n  <div class=\"box\">\n    <h2>Factorial Calculator</h2>\n    <label for=\"numInput\">Enter an integer (0 - 25):</label>\n    <input type=\"number\" id=\"numInput\" placeholder=\"e.g. 5\">\n    <button onclick=\"calculateFactorial()\">Compute Factorial</button>\n    <div id=\"output\" class=\"res\"></div>\n  </div>\n\n  <script>\n    function calculateFactorial() {\n      const val = document.getElementById(\"numInput\").value.trim();\n      const out = document.getElementById(\"output\");\n\n      if (val === \"\" || isNaN(val)) {\n        out.className = \"res error\";\n        out.textContent = \"Please enter a valid numeric value.\";\n        return;\n      }\n\n      const n = Number(val);\n\n      if (!Number.isInteger(n)) {\n        out.className = \"res error\";\n        out.textContent = \"Error: Input must be an integer, not a decimal.\";\n        return;\n      }\n\n      if (n < 0) {\n        out.className = \"res error\";\n        out.textContent = \"Error: Factorial is not defined for negative numbers.\";\n        return;\n      }\n\n      let fact = 1n; // BigInt to prevent integer overflow\n      for (let i = 1n; i <= BigInt(n); i++) {\n        fact *= i;\n      }\n\n      out.className = \"res success\";\n      out.textContent = `${n}! = ${fact.toString()}`;\n    }\n  </script>\n</body>\n</html>",
        "explanation": "Validates for empty, decimal, and negative numbers. Uses JavaScript `BigInt` to prevent integer overflow for values larger than 20.",
        "viva": [
          "Why use BigInt for factorials in JavaScript? — Standard JavaScript numbers lose precision beyond Number.MAX_SAFE_INTEGER (9,007,199,254,740,991).",
          "What does Number.isInteger() check? — It verifies whether the passed value is an integer or has fractional decimals.",
          "What is 0! equal to? — By mathematical definition, 0! = 1."
        ]
      },
      {
        "number": 2,
        "question": "Develop a PHP application that authenticates a user, displays profile information, allows the user to edit details and terminates the session on logout.",
        "language": "PHP",
        "code": "<?php\nsession_start();\n\n// Logout\nif (isset($_GET['logout'])) {\n    session_destroy();\n    header(\"Location: ?\");\n    exit();\n}\n\n// Initial login seed\nif (!isset($_SESSION['user']) && isset($_POST['login'])) {\n    if ($_POST['user'] === 'student' && $_POST['pass'] === 'pass123') {\n        $_SESSION['user'] = 'student';\n        $_SESSION['name'] = 'Rahul Verma';\n        $_SESSION['email'] = 'rahul@example.com';\n    }\n}\n\n// Profile update\nif (isset($_SESSION['user']) && isset($_POST['update'])) {\n    $_SESSION['name']  = htmlspecialchars($_POST['name']);\n    $_SESSION['email'] = htmlspecialchars($_POST['email']);\n    $msg = \"Profile updated successfully!\";\n}\n?>\n<!DOCTYPE html>\n<html>\n<head><title>User Profile Management</title></head>\n<body style=\"font-family:Arial;padding:25px;background:#f8fafc;\">\n<?php if (!isset($_SESSION['user'])): ?>\n  <form method=\"POST\" style=\"max-width:320px;background:white;padding:20px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.1);\">\n    <h2>Student Login</h2>\n    <p><label>Username: <input type=\"text\" name=\"user\" value=\"student\" required></label></p>\n    <p><label>Password: <input type=\"password\" name=\"pass\" value=\"pass123\" required></label></p>\n    <button type=\"submit\" name=\"login\" style=\"background:#2563eb;color:white;padding:8px 14px;border:none;\">Sign In</button>\n  </form>\n<?php else: ?>\n  <div style=\"max-width:450px;background:white;padding:25px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.1);\">\n    <h2>User Profile (Logged In)</h2>\n    <?php if (isset($msg)) echo \"<p style='color:green;'>$msg</p>\"; ?>\n    <form method=\"POST\">\n      <p><label>Username (Fixed): <input type=\"text\" value=\"<?= $_SESSION['user'] ?>\" disabled></label></p>\n      <p><label>Full Name: <input type=\"text\" name=\"name\" value=\"<?= $_SESSION['name'] ?>\" required></label></p>\n      <p><label>Email: <input type=\"email\" name=\"email\" value=\"<?= $_SESSION['email'] ?>\" required></label></p>\n      <button type=\"submit\" name=\"update\" style=\"background:#16a34a;color:white;padding:8px 14px;border:none;\">Save Profile Changes</button>\n    </form>\n    <hr style=\"margin:20px 0;\">\n    <a href=\"?logout=1\" style=\"color:#dc2626;font-weight:bold;\">Log Out</a>\n  </div>\n<?php endif; ?>\n</body>\n</html>",
        "explanation": "Maintains user profile state across authenticated requests using `$_SESSION`. Allows editing details and terminates session via `session_destroy()`.",
        "viva": [
          "How is user state maintained across multiple PHP requests? — By storing identifying attributes in the $_SESSION array, tracked by the PHPSESSID cookie.",
          "What is the difference between disabling an input and hiding it? — Disabled inputs cannot be focused or submitted in standard POST forms.",
          "Why is session_destroy() followed by a header redirect? — To clear browser state and reload the unauthenticated login view."
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Fibonacci Series Generator</title>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 25px; background: #f8fafc; }\n    .card { max-width: 450px; background: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }\n    input { width: 100%; padding: 8px; margin: 10px 0; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }\n    button { background: #2563eb; color: white; padding: 10px 16px; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; }\n    .badge-list { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 15px; }\n    .badge { background: #eff6ff; color: #1d4ed8; border: 1px solid #bfdbfe; padding: 6px 12px; border-radius: 20px; font-weight: bold; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Fibonacci Series Generator</h2>\n    <label for=\"limit\">Enter Maximum Value Limit:</label>\n    <input type=\"number\" id=\"limit\" placeholder=\"e.g. 100\" value=\"50\" min=\"0\">\n    <button onclick=\"generateFibonacci()\">Generate Series</button>\n\n    <h3>Result:</h3>\n    <div id=\"result\" class=\"badge-list\"></div>\n  </div>\n\n  <script>\n    function generateFibonacci() {\n      const max = Number(document.getElementById(\"limit\").value);\n      const container = document.getElementById(\"result\");\n      container.innerHTML = \"\";\n\n      if (isNaN(max) || max < 0) {\n        container.innerHTML = \"<p style='color:red;'>Please enter a positive limit.</p>\";\n        return;\n      }\n\n      let a = 0, b = 1;\n      const series = [];\n\n      while (a <= max) {\n        series.push(a);\n        const next = a + b;\n        a = b;\n        b = next;\n      }\n\n      if (series.length === 0) {\n        container.innerHTML = \"<p>No terms generated.</p>\";\n      } else {\n        container.innerHTML = series.map(term => `<span class=\"badge\">${term}</span>`).join(\"\");\n      }\n    }\n    generateFibonacci();\n  </script>\n</body>\n</html>",
        "explanation": "Generates Fibonacci terms dynamically (`a + b`) while `a <= limit` using a `while` loop, and displays each term in styled badges.",
        "viva": [
          "What is the mathematical rule of the Fibonacci sequence? — F(0) = 0, F(1) = 1, and F(n) = F(n-1) + F(n-2) for n >= 2.",
          "How can you generate N terms instead of terms up to a max value? — Use a for loop running from 0 to N-1.",
          "What is the time complexity of the iterative Fibonacci generator? — O(N) linear time."
        ]
      },
      {
        "number": 2,
        "question": "Create an array of numbers or names. Display the array, sort its elements and search for a value entered by the user.",
        "language": "JavaScript",
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Array Search and Sort</title>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 25px; background: #f8fafc; }\n    .box { max-width: 500px; background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }\n    button { background: #2563eb; color: white; padding: 8px 14px; border: none; border-radius: 4px; cursor: pointer; margin-right: 8px; }\n    input { padding: 8px; border: 1px solid #ccc; border-radius: 4px; width: 60%; }\n    .display { background: #f1f5f9; padding: 12px; border-radius: 6px; font-family: monospace; font-size: 15px; margin: 10px 0; }\n  </style>\n</head>\n<body>\n  <div class=\"box\">\n    <h2>Student Names Array Studio</h2>\n    <p><strong>Current Array:</strong></p>\n    <div id=\"arrayDisplay\" class=\"display\"></div>\n\n    <div style=\"margin: 15px 0;\">\n      <button onclick=\"sortArray()\">Sort Alphabetically</button>\n      <button onclick=\"resetArray()\">Reset</button>\n    </div>\n\n    <h3>Search for a Name:</h3>\n    <input type=\"text\" id=\"searchInput\" placeholder=\"Enter name to search...\">\n    <button onclick=\"searchArray()\">Search</button>\n    <p id=\"searchResult\" style=\"font-weight:bold;\"></p>\n  </div>\n\n  <script>\n    const original = [\"Vikram\", \"Ananya\", \"Rohit\", \"Sneha\", \"Kiran\", \"Bhavna\"];\n    let arr = [...original];\n\n    function show() {\n      document.getElementById(\"arrayDisplay\").textContent = JSON.stringify(arr);\n    }\n\n    function sortArray() {\n      arr.sort((a, b) => a.localeCompare(b));\n      show();\n    }\n\n    function resetArray() {\n      arr = [...original];\n      show();\n      document.getElementById(\"searchResult\").textContent = \"\";\n    }\n\n    function searchArray() {\n      const q = document.getElementById(\"searchInput\").value.trim().toLowerCase();\n      const res = document.getElementById(\"searchResult\");\n      const index = arr.findIndex(item => item.toLowerCase() === q);\n\n      if (index !== -1) {\n        res.style.color = \"#16a34a\";\n        res.textContent = `Found \"${arr[index]}\" at index ${index} (Position ${index + 1}).`;\n      } else {\n        res.style.color = \"#dc2626\";\n        res.textContent = `\"${q}\" was not found in the array.`;\n      }\n    }\n    show();\n  </script>\n</body>\n</html>",
        "explanation": "Uses array `sort()` with `localeCompare()` and `findIndex()` to locate user-searched elements case-insensitively.",
        "viva": [
          "Why use (a, b) => a - b for sorting numbers in JavaScript? — Default arr.sort() converts elements to strings, sorting 100 before 20.",
          "What does findIndex() return if an element is not found? — It returns -1.",
          "What is the spread operator [...arr] used for here? — It creates a shallow clone of the array without mutating the original."
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Prime Numbers up to N</title>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 25px; background: #f8fafc; }\n    .card { max-width: 500px; background: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }\n    input { width: 100%; padding: 8px; margin: 10px 0; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }\n    button { background: #2563eb; color: white; padding: 10px 16px; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; }\n    .primes-grid { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 15px; max-height: 250px; overflow-y: auto; }\n    .prime-pill { background: #dcfce7; color: #15803d; border: 1px solid #86efac; padding: 4px 10px; border-radius: 12px; font-weight: bold; font-size: 13px; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Prime Numbers Generator</h2>\n    <label for=\"limit\">Enter Limit (N):</label>\n    <input type=\"number\" id=\"limit\" value=\"50\" min=\"2\" max=\"1000\">\n    <button onclick=\"displayPrimes()\">Find All Primes</button>\n\n    <h3>Primes Found: <span id=\"count\" style=\"color:#2563eb;\"></span></h3>\n    <div id=\"output\" class=\"primes-grid\"></div>\n  </div>\n\n  <script>\n    function isPrime(num) {\n      if (num < 2) return false;\n      for (let i = 2; i <= Math.sqrt(num); i++) {\n        if (num % i === 0) return false;\n      }\n      return true;\n    }\n\n    function displayPrimes() {\n      const n = Number(document.getElementById(\"limit\").value);\n      const out = document.getElementById(\"output\");\n      const count = document.getElementById(\"count\");\n      out.innerHTML = \"\";\n\n      if (isNaN(n) || n < 2) {\n        out.innerHTML = \"<p style='color:red;'>Please enter a number >= 2.</p>\";\n        count.textContent = \"0\";\n        return;\n      }\n\n      const primes = [];\n      for (let i = 2; i <= n; i++) {\n        if (isPrime(i)) primes.push(i);\n      }\n\n      count.textContent = primes.length;\n      out.innerHTML = primes.map(p => `<span class=\"prime-pill\">${p}</span>`).join(\"\");\n    }\n    displayPrimes();\n  </script>\n</body>\n</html>",
        "explanation": "Uses a helper function `isPrime(num)` checking divisors up to `Math.sqrt(num)` and loops from 2 to N to collect all prime numbers.",
        "viva": [
          "Why start checking primes from 2? — 2 is the smallest prime number and the only even prime number.",
          "What is the Sieve of Eratosthenes? — An optimal ancient algorithm for finding all primes up to N in O(N log log N) time.",
          "What does Math.sqrt() achieve in prime checking? — It reduces loop iterations from N to sqrt(N), drastically speeding up performance."
        ]
      },
      {
        "number": 2,
        "question": "Create a registration form and validate required fields in PHP before storing or displaying the submitted information.",
        "language": "PHP",
        "code": "<!DOCTYPE html>\n<html>\n<head><title>PHP Server-Side Validation</title></head>\n<body style=\"font-family:Arial;padding:25px;background:#f8fafc;\">\n  <h2>Server-Side Form Validation in PHP</h2>\n\n<?php\n$errors = [];\n$name = $email = $phone = \"\";\n\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\") {\n    // 1. Name validation\n    if (empty(trim($_POST[\"name\"] ?? \"\"))) {\n        $errors[] = \"Full Name is required.\";\n    } else {\n        $name = trim($_POST[\"name\"]);\n        if (!preg_match(\"/^[a-zA-Z ]*$/\", $name)) {\n            $errors[] = \"Name can only contain letters and white space.\";\n        }\n    }\n\n    // 2. Email validation\n    if (empty(trim($_POST[\"email\"] ?? \"\"))) {\n        $errors[] = \"Email Address is required.\";\n    } else {\n        $email = trim($_POST[\"email\"]);\n        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {\n            $errors[] = \"Invalid email format.\";\n        }\n    }\n\n    // 3. Phone validation\n    if (empty(trim($_POST[\"phone\"] ?? \"\"))) {\n        $errors[] = \"Phone number is required.\";\n    } else {\n        $phone = trim($_POST[\"phone\"]);\n        if (!preg_match(\"/^[0-9]{10}$/\", $phone)) {\n            $errors[] = \"Phone number must be exactly 10 digits.\";\n        }\n    }\n\n    // Display result\n    if (empty($errors)) {\n        echo \"<div style='background:#f0fdf4;border:1px solid #86efac;padding:15px;max-width:400px;border-radius:6px;margin-bottom:20px;'>\";\n        echo \"<h3 style='color:#15803d;margin-top:0;'>Registration Validated!</h3>\";\n        echo \"<p>Name: \" . htmlspecialchars($name) . \"</p>\";\n        echo \"<p>Email: \" . htmlspecialchars($email) . \"</p>\";\n        echo \"<p>Phone: \" . htmlspecialchars($phone) . \"</p>\";\n        echo \"</div>\";\n    }\n}\n?>\n\n<?php if (!empty($errors)): ?>\n  <div style=\"background:#fef2f2;border:1px solid #fca5a5;padding:15px;max-width:400px;border-radius:6px;margin-bottom:20px;\">\n    <h3 style=\"color:#b91c1c;margin-top:0;\">Please fix the following errors:</h3>\n    <ul style=\"color:#b91c1c;margin:0;padding-left:20px;\">\n      <?php foreach ($errors as $err): ?>\n        <li><?= htmlspecialchars($err) ?></li>\n      <?php endforeach; ?>\n    </ul>\n  </div>\n<?php endif; ?>\n\n  <form method=\"POST\" style=\"max-width:380px;background:white;padding:20px;border-radius:6px;box-shadow:0 2px 8px rgba(0,0,0,0.1);\">\n    <p><label>Name: <input type=\"text\" name=\"name\" value=\"<?= htmlspecialchars($name) ?>\" style=\"width:100%;\"></label></p>\n    <p><label>Email: <input type=\"text\" name=\"email\" value=\"<?= htmlspecialchars($email) ?>\" style=\"width:100%;\"></label></p>\n    <p><label>Phone (10 digits): <input type=\"text\" name=\"phone\" value=\"<?= htmlspecialchars($phone) ?>\" style=\"width:100%;\"></label></p>\n    <button type=\"submit\" style=\"background:#2563eb;color:white;padding:8px 16px;border:none;border-radius:4px;\">Register</button>\n  </form>\n</body>\n</html>",
        "explanation": "Validates mandatory fields on server side with `empty()`, `preg_match()`, and `filter_var()`. Collects and displays user errors in an alert box.",
        "viva": [
          "Why is server-side validation mandatory even if HTML5 client validation exists? — Client-side validation can easily be bypassed by disabling JavaScript or using curl/Postman.",
          "What does preg_match('/^[0-9]{10}$/', $phone) check? — It ensures the string contains exactly 10 numeric digits from start (^) to end ($).",
          "How do you preserve user entered values on validation error? — By echoing the sanitized variable in the input's value attribute."
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Palindrome Checker</title>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 25px; background: #f8fafc; }\n    .box { max-width: 420px; background: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }\n    input { width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #cbd5e1; border-radius: 4px; box-sizing: border-box; }\n    button { background: #2563eb; color: white; padding: 10px 18px; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; }\n    .badge { display: inline-block; padding: 8px 16px; border-radius: 20px; font-weight: bold; margin-top: 15px; }\n    .pal { background: #dcfce7; color: #15803d; border: 1px solid #86efac; }\n    .not-pal { background: #fee2e2; color: #b91c1c; border: 1px solid #fca5a5; }\n  </style>\n</head>\n<body>\n  <div class=\"box\">\n    <h2>Palindrome Number / String Checker</h2>\n    <label for=\"inputVal\">Enter a number or text:</label>\n    <input type=\"text\" id=\"inputVal\" placeholder=\"e.g. 12321 or radar\" value=\"12321\">\n    <button onclick=\"checkPalindrome()\">Check Palindrome</button>\n    <div id=\"output\"></div>\n  </div>\n\n  <script>\n    function checkPalindrome() {\n      const raw = document.getElementById(\"inputVal\").value.trim();\n      const out = document.getElementById(\"output\");\n\n      if (!raw) {\n        out.innerHTML = \"<p style='color:red;'>Please enter a value.</p>\";\n        return;\n      }\n\n      // Convert to clean lowercase string\n      const str = raw.toLowerCase().replace(/[^a-z0-9]/g, \"\");\n      const rev = str.split(\"\").reverse().join(\"\");\n\n      if (str === rev) {\n        out.innerHTML = `<div class=\"badge pal\">&check; \"${raw}\" is a PALINDROME!</div>`;\n      } else {\n        out.innerHTML = `<div class=\"badge not-pal\">&#10008; \"${raw}\" is NOT a palindrome (Reversed: ${rev}).</div>`;\n      }\n    }\n    checkPalindrome();\n  </script>\n</body>\n</html>",
        "explanation": "Checks palindromes by reversing characters via `str.split('').reverse().join('')` and comparing to the original string without page reload.",
        "viva": [
          "What is a palindrome? — A string or number that reads identical forward and backward (e.g. 12321, madam).",
          "Why use str.split('').reverse().join('')? — split converts to array of characters, reverse reverses array elements, and join reassembles it into a string.",
          "What is the two-pointer approach for palindrome checking? — Compare character at start and end indices moving inward until they meet; O(N) time and O(1) space."
        ]
      },
      {
        "number": 2,
        "question": "Retrieve feedback records from a MySQL table using PHP and display the name, email and comments in an HTML table.",
        "language": "PHP",
        "code": "<!DOCTYPE html>\n<html>\n<head>\n  <title>Feedback Records</title>\n  <style>\n    body { font-family: Arial; padding: 25px; background: #f8fafc; }\n    table { width: 100%; border-collapse: collapse; background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }\n    th, td { border: 1px solid #cbd5e1; padding: 12px; text-align: left; }\n    th { background: #1e3a8a; color: white; }\n    tr:nth-child(even) { background: #f1f5f9; }\n  </style>\n</head>\n<body>\n  <h2>Customer Feedback Submissions</h2>\n\n<?php\n$conn = new mysqli(\"localhost\", \"root\", \"\", \"wt_lab\");\nif ($conn->connect_error) {\n    die(\"<p style='color:red;'>Connection failed: \" . $conn->connect_error . \"</p>\");\n}\n\n$sql = \"SELECT id, name, email, comments, created_at FROM feedback ORDER BY id DESC\";\n$result = $conn->query($sql);\n\nif ($result && $result->num_rows > 0) {\n    echo \"<table>\";\n    echo \"<tr><th>#</th><th>Customer Name</th><th>Email</th><th>Feedback Comments</th></tr>\";\n    while ($row = $result->fetch_assoc()) {\n        echo \"<tr>\";\n        echo \"<td>\" . htmlspecialchars($row[\"id\"]) . \"</td>\";\n        echo \"<td>\" . htmlspecialchars($row[\"name\"]) . \"</td>\";\n        echo \"<td>\" . htmlspecialchars($row[\"email\"]) . \"</td>\";\n        echo \"<td>\" . htmlspecialchars($row[\"comments\"]) . \"</td>\";\n        echo \"</tr>\";\n    }\n    echo \"</table>\";\n} else {\n    echo \"<p>No feedback entries found in the database.</p>\";\n}\n\n$conn->close();\n?>\n</body>\n</html>",
        "explanation": "Executes SQL query `SELECT * FROM feedback` using `mysqli` and dynamically constructs an HTML table of submitted user feedback.",
        "viva": [
          "What does ORDER BY id DESC do? — It sorts records so that the newest submissions appear first at the top of the table.",
          "Why is escaping table outputs with htmlspecialchars() critical? — Unsanitized user comments could contain <script> tags leading to stored XSS attacks.",
          "How do you handle zero results gracefully? — By checking if $result->num_rows > 0 before rendering the table."
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Four Math Operations</title>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 25px; background: #f1f5f9; }\n    .card { max-width: 500px; margin: auto; background: white; padding: 25px; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }\n    h2 { color: #1e3a8a; text-align: center; }\n    input { width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 16px; }\n    .btn-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }\n    button { padding: 12px; background: #2563eb; color: white; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; transition: 0.2s; }\n    button:hover { background: #1d4ed8; }\n    .result-box { margin-top: 20px; padding: 15px; background: #f8fafc; border-left: 4px solid #2563eb; border-radius: 4px; min-height: 40px; font-weight: bold; color: #1e293b; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Multi-Utility Number Studio</h2>\n    <input type=\"number\" id=\"numInput\" placeholder=\"Enter a positive integer\" value=\"5\">\n    \n    <div class=\"btn-grid\">\n      <button onclick=\"handleFactorial()\">1. Factorial</button>\n      <button onclick=\"handleFibonacci()\">2. Fibonacci</button>\n      <button onclick=\"handlePrime()\">3. Prime Check</button>\n      <button onclick=\"handlePalindrome()\">4. Palindrome</button>\n    </div>\n\n    <div class=\"result-box\" id=\"result\">Select an operation above to compute result.</div>\n  </div>\n\n  <script>\n    function getVal() {\n      const v = document.getElementById(\"numInput\").value.trim();\n      if (v === \"\") return null;\n      return Number(v);\n    }\n\n    function handleFactorial() {\n      const n = getVal();\n      const res = document.getElementById(\"result\");\n      if (n === null || n < 0) { res.textContent = \"Please enter a non-negative integer.\"; return; }\n      let f = 1;\n      for (let i = 1; i <= n; i++) f *= i;\n      res.textContent = `Factorial of ${n} (${n}!) = ${f}`;\n    }\n\n    function handleFibonacci() {\n      const n = getVal();\n      const res = document.getElementById(\"result\");\n      if (n === null || n < 1) { res.textContent = \"Please enter a limit >= 1.\"; return; }\n      let a = 0, b = 1, terms = [];\n      while (a <= n) {\n        terms.push(a);\n        let next = a + b; a = b; b = next;\n      }\n      res.textContent = `Fibonacci up to ${n}: ${terms.join(\", \")}`;\n    }\n\n    function handlePrime() {\n      const n = getVal();\n      const res = document.getElementById(\"result\");\n      if (n === null || n < 2) { res.textContent = `${n} is NOT a prime number.`; return; }\n      let prime = true;\n      for (let i = 2; i <= Math.sqrt(n); i++) {\n        if (n % i === 0) { prime = false; break; }\n      }\n      res.textContent = prime ? `${n} is a PRIME number.` : `${n} is NOT a prime number.`;\n    }\n\n    function handlePalindrome() {\n      const v = document.getElementById(\"numInput\").value.trim();\n      const res = document.getElementById(\"result\");\n      if (!v) { res.textContent = \"Enter a valid number.\"; return; }\n      const rev = v.split(\"\").reverse().join(\"\");\n      res.textContent = (v === rev) ? `${v} is a PALINDROME!` : `${v} is NOT a palindrome.`;\n    }\n  </script>\n</body>\n</html>",
        "explanation": "Single input with 4 distinct button event listeners calling dedicated JavaScript functions for factorial, Fibonacci, prime checking, and palindrome verification.",
        "viva": [
          "Why is modular function design good practice? — Each function has a single responsibility, making code reusable, testable, and maintainable.",
          "How can you prevent page refresh when buttons are clicked inside a form? — By setting type='button' on the button elements or using event.preventDefault().",
          "What does getVal() do? — A shared helper that retrieves, trims, and validates the user input."
        ]
      },
      {
        "number": 2,
        "question": "Create an AngularJS application with a controller and a message variable. Display the message in the view using {{message}}.",
        "language": "AngularJS",
        "code": "<!DOCTYPE html>\n<html ng-app=\"myApp\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>AngularJS Message Controller</title>\n  <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js\"></script>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 30px; background: #f8fafc; }\n    .card { max-width: 450px; background: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); border-top: 4px solid #b91c1c; }\n    .msg-display { background: #fef2f2; border: 1px solid #fecaca; color: #991b1b; padding: 15px; border-radius: 6px; font-size: 18px; font-weight: bold; margin-top: 15px; }\n  </style>\n</head>\n<body ng-controller=\"MessageCtrl\">\n  <div class=\"card\">\n    <h2>AngularJS First App</h2>\n    <p>The message below is bound from the AngularJS Controller using interpolation <code>{{ message }}</code>:</p>\n    \n    <div class=\"msg-display\">\n      {{ message }}\n    </div>\n\n    <div style=\"margin-top: 20px;\">\n      <label>Edit Message Dynamically:</label>\n      <input type=\"text\" ng-model=\"message\" style=\"width:100%;padding:8px;box-sizing:border-box;margin-top:6px;\">\n    </div>\n  </div>\n\n  <script>\n    var app = angular.module(\"myApp\", []);\n    app.controller(\"MessageCtrl\", function($scope) {\n      $scope.message = \"Hello! Welcome to Web Technologies AngularJS Lab!\";\n    });\n  </script>\n</body>\n</html>",
        "explanation": "Initializes AngularJS app with `ng-app='myApp'`, defines controller with `$scope.message`, and displays data using double curly brace expressions `{{ message }}`.",
        "viva": [
          "What is $scope in AngularJS? — An object that binds the Controller and the View, serving as the glue between application data and presentation.",
          "What is ng-app? — The root directive that auto-bootstraps the AngularJS application.",
          "What is interpolation {{ }}? — It compiles expressions against the current scope and renders the evaluated result into HTML."
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>JavaScript Form Validation</title>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 25px; background: #f8fafc; }\n    .box { max-width: 400px; background: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }\n    h2 { color: #1e3a8a; margin-top: 0; }\n    .group { margin-bottom: 15px; }\n    label { display: block; font-weight: bold; margin-bottom: 5px; }\n    input { width: 100%; padding: 9px; box-sizing: border-box; border: 1px solid #cbd5e1; border-radius: 4px; }\n    .err { color: #dc2626; font-size: 13px; margin-top: 4px; }\n    button { background: #2563eb; color: white; padding: 10px 18px; border: none; border-radius: 4px; font-weight: bold; width: 100%; cursor: pointer; }\n    .success-alert { background: #dcfce7; color: #15803d; padding: 10px; border-radius: 4px; font-weight: bold; margin-bottom: 15px; display: none; }\n  </style>\n</head>\n<body>\n  <div class=\"box\">\n    <h2>Student Registration</h2>\n    <div id=\"successBox\" class=\"success-alert\">Validation successful! Form submitted.</div>\n    <form onsubmit=\"return validateForm(event)\">\n      <div class=\"group\">\n        <label>Full Name:</label>\n        <input type=\"text\" id=\"name\">\n        <div id=\"nameErr\" class=\"err\"></div>\n      </div>\n      <div class=\"group\">\n        <label>Email Address:</label>\n        <input type=\"text\" id=\"email\">\n        <div id=\"emailErr\" class=\"err\"></div>\n      </div>\n      <div class=\"group\">\n        <label>Password (Min 8 chars, 1 uppercase, 1 digit):</label>\n        <input type=\"password\" id=\"password\">\n        <div id=\"passErr\" class=\"err\"></div>\n      </div>\n      <button type=\"submit\">Submit Registration</button>\n    </form>\n  </div>\n\n  <script>\n    function validateForm(e) {\n      e.preventDefault();\n      let valid = true;\n\n      // Clear errors\n      document.getElementById(\"nameErr\").textContent = \"\";\n      document.getElementById(\"emailErr\").textContent = \"\";\n      document.getElementById(\"passErr\").textContent = \"\";\n      document.getElementById(\"successBox\").style.display = \"none\";\n\n      const name = document.getElementById(\"name\").value.trim();\n      const email = document.getElementById(\"email\").value.trim();\n      const pass = document.getElementById(\"password\").value;\n\n      if (!name) {\n        document.getElementById(\"nameErr\").textContent = \"Name cannot be empty.\";\n        valid = false;\n      }\n\n      const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n      if (!email) {\n        document.getElementById(\"emailErr\").textContent = \"Email cannot be empty.\";\n        valid = false;\n      } else if (!emailRegex.test(email)) {\n        document.getElementById(\"emailErr\").textContent = \"Enter a valid email address.\";\n        valid = false;\n      }\n\n      // Password: min 8 chars, at least one uppercase letter, at least one number\n      const passRegex = /^(?=.*[A-Z])(?=.*\\d).{8,}$/;\n      if (!pass) {\n        document.getElementById(\"passErr\").textContent = \"Password cannot be empty.\";\n        valid = false;\n      } else if (!passRegex.test(pass)) {\n        document.getElementById(\"passErr\").textContent = \"Password must be at least 8 chars with 1 uppercase & 1 number.\";\n        valid = false;\n      }\n\n      if (valid) {\n        document.getElementById(\"successBox\").style.display = \"block\";\n      }\n      return false;\n    }\n  </script>\n</body>\n</html>",
        "explanation": "Client-side form validation with JavaScript regular expressions verifying empty fields, valid email structures, and strong password constraints.",
        "viva": [
          "What does e.preventDefault() do? — It halts the standard form submission HTTP round-trip so JavaScript can validate fields first.",
          "What does the regex (?=.*[A-Z]) lookahead assert? — A positive lookahead asserting that at least one uppercase letter exists in the string.",
          "Why is trim() called before testing empty strings? — To treat whitespace-only inputs as invalid empty fields."
        ]
      },
      {
        "number": 2,
        "question": "Accept two numbers using ng-model and display addition, subtraction, multiplication and division using AngularJS expressions.",
        "language": "AngularJS",
        "code": "<!DOCTYPE html>\n<html ng-app>\n<head>\n  <meta charset=\"UTF-8\">\n  <title>AngularJS Arithmetic Calculator</title>\n  <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js\"></script>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 25px; background: #f8fafc; }\n    .card { max-width: 450px; background: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }\n    h2 { color: #1e3a8a; }\n    input { width: 100%; padding: 8px; margin: 8px 0; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }\n    table { width: 100%; border-collapse: collapse; margin-top: 15px; }\n    td { padding: 8px; border-bottom: 1px solid #eee; font-size: 15px; }\n    .val { font-weight: bold; color: #16a34a; text-align: right; }\n  </style>\n</head>\n<body ng-init=\"num1=15; num2=4\">\n  <div class=\"card\">\n    <h2>AngularJS Live Arithmetic</h2>\n    <label>First Number (num1):</label>\n    <input type=\"number\" ng-model=\"num1\">\n\n    <label>Second Number (num2):</label>\n    <input type=\"number\" ng-model=\"num2\">\n\n    <h3>Live Expressions:</h3>\n    <table>\n      <tr><td>Addition (num1 + num2):</td><td class=\"val\">{{ num1 + num2 }}</td></tr>\n      <tr><td>Subtraction (num1 - num2):</td><td class=\"val\">{{ num1 - num2 }}</td></tr>\n      <tr><td>Multiplication (num1 * num2):</td><td class=\"val\">{{ num1 * num2 }}</td></tr>\n      <tr><td>Division (num1 / num2):</td><td class=\"val\">{{ num2 !== 0 ? (num1 / num2 | number:2) : 'Undefined (Divide by 0)' }}</td></tr>\n      <tr><td>Modulus (num1 % num2):</td><td class=\"val\">{{ num1 % num2 }}</td></tr>\n    </table>\n  </div>\n</body>\n</html>",
        "explanation": "Uses AngularJS `ng-model` for real-time two-way data binding, evaluating expressions `{{ num1 + num2 }}` etc. immediately as the user types.",
        "viva": [
          "What is two-way data binding in AngularJS? — Synchronization where changes in the Model automatically update the View, and changes in the View immediately update the Model.",
          "What does ng-init do? — Initializes scope properties directly in the HTML markup.",
          "What does the number:2 filter do? — Formats numeric decimals to 2 decimal places."
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>RegEx Form Validation</title>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 25px; background: #f1f5f9; }\n    .card { max-width: 420px; margin: auto; background: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }\n    h2 { color: #1e3a8a; margin-top: 0; }\n    .field { margin-bottom: 15px; }\n    label { display: block; font-weight: bold; margin-bottom: 4px; }\n    input { width: 100%; padding: 8px; box-sizing: border-box; border: 1px solid #cbd5e1; border-radius: 4px; }\n    .msg { font-size: 13px; margin-top: 4px; }\n    .valid { color: #16a34a; }\n    .invalid { color: #dc2626; }\n    button { background: #2563eb; color: white; padding: 10px; border: none; border-radius: 4px; width: 100%; font-weight: bold; cursor: pointer; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>RegEx Registration</h2>\n    <form onsubmit=\"return validate(event)\">\n      <div class=\"field\">\n        <label>Name (Letters only):</label>\n        <input type=\"text\" id=\"regName\" placeholder=\"e.g. John Doe\">\n        <div id=\"nameMsg\" class=\"msg\"></div>\n      </div>\n      <div class=\"field\">\n        <label>Email Address:</label>\n        <input type=\"text\" id=\"regEmail\" placeholder=\"e.g. user@domain.com\">\n        <div id=\"emailMsg\" class=\"msg\"></div>\n      </div>\n      <div class=\"field\">\n        <label>Password (Upper, Lower, Number & Special):</label>\n        <input type=\"password\" id=\"regPass\">\n        <div id=\"passMsg\" class=\"msg\"></div>\n      </div>\n      <button type=\"submit\">Verify & Register</button>\n    </form>\n  </div>\n\n  <script>\n    function validate(e) {\n      e.preventDefault();\n      let ok = true;\n\n      const name = document.getElementById(\"regName\").value.trim();\n      const email = document.getElementById(\"regEmail\").value.trim();\n      const pass = document.getElementById(\"regPass\").value;\n\n      // 1. Name: only letters and spaces\n      const nameRegex = /^[A-Za-z\\s]+$/;\n      const nMsg = document.getElementById(\"nameMsg\");\n      if (nameRegex.test(name)) {\n        nMsg.className = \"msg valid\"; nMsg.textContent = \"✔ Valid Name\";\n      } else {\n        nMsg.className = \"msg invalid\"; nMsg.textContent = \"✖ Name can only contain letters and spaces.\"; ok = false;\n      }\n\n      // 2. Email format\n      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;\n      const eMsg = document.getElementById(\"emailMsg\");\n      if (emailRegex.test(email)) {\n        eMsg.className = \"msg valid\"; eMsg.textContent = \"✔ Valid Email\";\n      } else {\n        eMsg.className = \"msg invalid\"; eMsg.textContent = \"✖ Invalid email address format.\"; ok = false;\n      }\n\n      // 3. Password: upper, lower, number, special, min 8\n      const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/;\n      const pMsg = document.getElementById(\"passMsg\");\n      if (passRegex.test(pass)) {\n        pMsg.className = \"msg valid\"; pMsg.textContent = \"✔ Strong Password\";\n      } else {\n        pMsg.className = \"msg invalid\"; pMsg.textContent = \"✖ Min 8 chars with 1 uppercase, 1 lowercase, 1 digit, 1 special char.\"; ok = false;\n      }\n\n      if (ok) alert(\"All fields passed RegEx validation successfully!\");\n      return false;\n    }\n  </script>\n</body>\n</html>",
        "explanation": "Applies JavaScript `RegExp.prototype.test()` with patterns: `/^[A-Za-z\\s]+$/`, RFC email pattern, and complex password lookahead patterns.",
        "viva": [
          "What does the regex test() method return? — A boolean true if a match is found; false otherwise.",
          "What does [^\\s@] mean in regular expressions? — Any character that is neither whitespace nor the @ symbol.",
          "What does {8,} indicate? — Quantifier specifying a minimum length of 8 characters with no upper bound."
        ]
      },
      {
        "number": 2,
        "question": "Create a form with name and course fields using ng-model. Display the entered values immediately in another section of the same page.",
        "language": "AngularJS",
        "code": "<!DOCTYPE html>\n<html ng-app>\n<head>\n  <meta charset=\"UTF-8\">\n  <title>AngularJS Live Form Binding</title>\n  <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js\"></script>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 25px; background: #f8fafc; }\n    .layout { display: flex; gap: 20px; max-width: 800px; margin: auto; }\n    .panel { flex: 1; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }\n    h2 { color: #1e3a8a; margin-top: 0; }\n    input, select { width: 100%; padding: 8px; margin: 8px 0 15px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }\n    .card { background: #eff6ff; border: 2px dashed #3b82f6; border-radius: 8px; padding: 18px; }\n  </style>\n</head>\n<body ng-init=\"studentName='Rahul'; selectedCourse='B.Tech CSE'\">\n  <div class=\"layout\">\n    <div class=\"panel\">\n      <h2>Student Entry Form</h2>\n      <label>Full Name:</label>\n      <input type=\"text\" ng-model=\"studentName\" placeholder=\"Type student name...\">\n\n      <label>Select Course:</label>\n      <select ng-model=\"selectedCourse\">\n        <option value=\"B.Tech CSE\">B.Tech CSE</option>\n        <option value=\"B.Tech IT\">B.Tech IT</option>\n        <option value=\"B.Tech AI & Data Science\">B.Tech AI & Data Science</option>\n        <option value=\"M.Tech Software Engineering\">M.Tech Software Engineering</option>\n      </select>\n    </div>\n\n    <div class=\"panel\">\n      <h2>Live Identity Card Preview</h2>\n      <div class=\"card\">\n        <h3 style=\"color:#1d4ed8;margin-top:0;\">Student ID Badge</h3>\n        <p><strong>Candidate Name:</strong> {{ studentName || '(Awaiting Name)' }}</p>\n        <p><strong>Enrolled Course:</strong> {{ selectedCourse || '(Select Course)' }}</p>\n        <p><strong>Status:</strong> <span style=\"color:#16a34a;font-weight:bold;\">Active Student</span></p>\n      </div>\n    </div>\n  </div>\n</body>\n</html>",
        "explanation": "Demonstrates live two-way data binding in AngularJS: as the user types in `<input ng-model='studentName'>` or changes the `<select>`, the preview card immediately renders the values.",
        "viva": [
          "What is the difference between one-way and two-way data binding? — One-way binding pushes model values to the view; two-way binding synchronizes changes in either direction automatically.",
          "What is the role of {{ studentName || '(Default)' }}? — It utilizes standard JavaScript logical OR fallback expression inside the template.",
          "Does this require writing manual DOM update code like document.getElementById? — No, AngularJS digest loop watches variables and updates the DOM declaratively."
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Strict Credential Validation</title>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 25px; background: #f8fafc; }\n    .card { max-width: 440px; margin: auto; background: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }\n    h2 { color: #1e3a8a; }\n    .field { margin-bottom: 15px; }\n    label { display: block; font-weight: bold; margin-bottom: 5px; }\n    input { width: 100%; padding: 8px; box-sizing: border-box; border: 1px solid #cbd5e1; border-radius: 4px; }\n    .err { color: #dc2626; font-size: 13px; margin-top: 4px; }\n    button { background: #2563eb; color: white; padding: 10px; border: none; border-radius: 4px; width: 100%; font-weight: bold; cursor: pointer; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Strict Validation Form</h2>\n    <form onsubmit=\"return validateCredentials(event)\">\n      <div class=\"field\">\n        <label>Username (Starts with uppercase + at least 1 digit):</label>\n        <input type=\"text\" id=\"uname\" placeholder=\"e.g. Student1\">\n        <div id=\"uErr\" class=\"err\"></div>\n      </div>\n      <div class=\"field\">\n        <label>Email Address:</label>\n        <input type=\"text\" id=\"uemail\" placeholder=\"e.g. user@domain.com\">\n        <div id=\"eErr\" class=\"err\"></div>\n      </div>\n      <div class=\"field\">\n        <label>Password (8-20 chars, upper, lower, special char):</label>\n        <input type=\"password\" id=\"upass\">\n        <div id=\"pErr\" class=\"err\"></div>\n      </div>\n      <button type=\"submit\">Verify Credentials</button>\n    </form>\n  </div>\n\n  <script>\n    function validateCredentials(e) {\n      e.preventDefault();\n      let ok = true;\n      document.getElementById(\"uErr\").textContent = \"\";\n      document.getElementById(\"eErr\").textContent = \"\";\n      document.getElementById(\"pErr\").textContent = \"\";\n\n      const uname = document.getElementById(\"uname\").value;\n      const email = document.getElementById(\"uemail\").value;\n      const pass = document.getElementById(\"upass\").value;\n\n      // 1. Username: Starts with uppercase [A-Z], contains at least 1 digit\n      const userRegex = /^[A-Z](?=.*\\d)[A-Za-z0-9_]{2,}$/;\n      if (!userRegex.test(uname)) {\n        document.getElementById(\"uErr\").textContent = \"Must start with uppercase letter and contain at least 1 digit.\";\n        ok = false;\n      }\n\n      // 2. Email validation\n      const emailRegex = /^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/;\n      if (!emailRegex.test(email)) {\n        document.getElementById(\"eErr\").textContent = \"Invalid email format.\";\n        ok = false;\n      }\n\n      // 3. Password: 8-20 chars, upper, lower, special char\n      const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>\\/?]).{8,20}$/;\n      if (!passRegex.test(pass)) {\n        document.getElementById(\"pErr\").textContent = \"Password must be 8-20 characters long with uppercase, lowercase and a special character.\";\n        ok = false;\n      }\n\n      if (ok) alert(\"All credentials successfully verified!\");\n      return false;\n    }\n  </script>\n</body>\n</html>",
        "explanation": "Uses regular expressions with character classes and lookaheads: `^[A-Z](?=.*\\d)` for username, and length bounding `{8,20}` with special characters.",
        "viva": [
          "What does /^[A-Z]/ assert? — It matches an uppercase letter strictly at the very beginning of the input string.",
          "What does .{8,20}$ ensure? — It enforces that the total length of characters is between 8 and 20 inclusive.",
          "Why are special characters escaped inside square brackets? — In regex, characters like [ ] - \\ have special syntactic meanings and require backslash escaping."
        ]
      },
      {
        "number": 2,
        "question": "Define an array of student objects in an AngularJS controller and display the student details in a table using ng-repeat.",
        "language": "AngularJS",
        "code": "<!DOCTYPE html>\n<html ng-app=\"studentApp\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>AngularJS ng-repeat Table</title>\n  <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js\"></script>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 25px; background: #f8fafc; }\n    .card { max-width: 650px; background: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }\n    h2 { color: #1e3a8a; }\n    table { width: 100%; border-collapse: collapse; margin-top: 15px; }\n    th, td { border: 1px solid #cbd5e1; padding: 10px; text-align: left; }\n    th { background: #1e3a8a; color: white; }\n    tr:nth-child(even) { background: #f1f5f9; }\n    .grade { font-weight: bold; color: #16a34a; }\n  </style>\n</head>\n<body ng-controller=\"StudentController\">\n  <div class=\"card\">\n    <h2>Student Directory (ng-repeat)</h2>\n    <table>\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Roll No</th>\n          <th>Student Name</th>\n          <th>Department</th>\n          <th>CGPA</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr ng-repeat=\"s in students\">\n          <td>{{ $index + 1 }}</td>\n          <td>{{ s.roll }}</td>\n          <td><strong>{{ s.name }}</strong></td>\n          <td>{{ s.dept }}</td>\n          <td class=\"grade\">{{ s.cgpa | number:2 }}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <script>\n    var app = angular.module(\"studentApp\", []);\n    app.controller(\"StudentController\", function($scope) {\n      $scope.students = [\n        { roll: \"24WT01\", name: \"Aarav Sharma\", dept: \"CSE\", cgpa: 9.2 },\n        { roll: \"24WT02\", name: \"Diya Patel\", dept: \"IT\", cgpa: 8.8 },\n        { roll: \"24WT03\", name: \"Rohan Nair\", dept: \"AI&DS\", cgpa: 9.5 },\n        { roll: \"24WT04\", name: \"Sneha Reddy\", dept: \"CSE\", cgpa: 8.4 }\n      ];\n    });\n  </script>\n</body>\n</html>",
        "explanation": "Uses `ng-repeat='s in students'` to iterate through an array of objects defined in `$scope.students`, displaying properties and the built-in `$index` loop counter.",
        "viva": [
          "What does $index provide in ng-repeat? — The 0-based index of the current iteration item.",
          "What does ng-repeat-start and ng-repeat-end do? — Repeats a multi-element block without requiring an outer wrapper element.",
          "How do you sort items in ng-repeat? — Using the orderBy filter, e.g., ng-repeat='s in students | orderBy:\"name\"'."
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Live Digital Clock</title>\n  <style>\n    body { font-family: 'Segoe UI', Tahoma, sans-serif; background: #0f172a; color: white; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; }\n    .clock-card { background: #1e293b; border: 2px solid #38bdf8; padding: 30px 45px; border-radius: 16px; text-align: center; box-shadow: 0 10px 30px rgba(56, 189, 248, 0.25); }\n    .time { font-family: monospace; font-size: 48px; font-weight: bold; color: #38bdf8; letter-spacing: 2px; }\n    .date { font-size: 18px; color: #94a3b8; margin-top: 10px; font-weight: 500; }\n  </style>\n</head>\n<body>\n  <div class=\"clock-card\">\n    <h2 style=\"margin-top:0;color:#f8fafc;\">Live Digital Clock</h2>\n    <div id=\"clockTime\" class=\"time\">00:00:00 AM</div>\n    <div id=\"clockDate\" class=\"date\">Day, Month 00, 2026</div>\n  </div>\n\n  <script>\n    function updateClock() {\n      const now = new Date();\n\n      // Format Time\n      let hours = now.getHours();\n      const minutes = String(now.getMinutes()).padStart(2, \"0\");\n      const seconds = String(now.getSeconds()).padStart(2, \"0\");\n      const ampm = hours >= 12 ? \"PM\" : \"AM\";\n      hours = hours % 12;\n      hours = hours ? hours : 12; // 0 hour is 12 AM\n      const formattedHours = String(hours).padStart(2, \"0\");\n\n      document.getElementById(\"clockTime\").textContent = `${formattedHours}:${minutes}:${seconds} ${ampm}`;\n\n      // Format Date\n      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };\n      document.getElementById(\"clockDate\").textContent = now.toLocaleDateString(undefined, options);\n    }\n\n    // Call immediately, then schedule every 1000 milliseconds\n    updateClock();\n    setInterval(updateClock, 1000);\n  </script>\n</body>\n</html>",
        "explanation": "Uses `new Date()` methods (`getHours()`, `getMinutes()`, `getSeconds()`) and `setInterval(updateClock, 1000)` to render a live updating digital clock.",
        "viva": [
          "What is the difference between setInterval() and setTimeout()? — setTimeout executes a function once after a delay; setInterval repeatedly executes the function at the specified interval.",
          "How do you stop a running interval? — Using clearInterval(intervalId), where intervalId was returned by setInterval.",
          "What does padStart(2, '0') do? — It ensures two digits by prepending a leading zero if the string length is 1."
        ]
      },
      {
        "number": 2,
        "question": "Display a list of products and provide a search box. Use the AngularJS filter to show matching products dynamically as the user types.",
        "language": "AngularJS",
        "code": "<!DOCTYPE html>\n<html ng-app=\"catalogApp\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>AngularJS Dynamic Filter</title>\n  <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js\"></script>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 25px; background: #f8fafc; }\n    .card { max-width: 550px; background: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }\n    h2 { color: #1e3a8a; }\n    .search-box { width: 100%; padding: 10px; font-size: 15px; border: 2px solid #3b82f6; border-radius: 6px; box-sizing: border-box; margin-bottom: 15px; }\n    table { width: 100%; border-collapse: collapse; }\n    th, td { border: 1px solid #cbd5e1; padding: 10px; text-align: left; }\n    th { background: #1e3a8a; color: white; }\n    .price { font-weight: bold; color: #16a34a; }\n  </style>\n</head>\n<body ng-controller=\"CatalogCtrl\">\n  <div class=\"card\">\n    <h2>Dynamic Product Search</h2>\n    <input type=\"text\" class=\"search-box\" ng-model=\"searchQuery\" placeholder=\"Search product name or category...\">\n\n    <table>\n      <thead>\n        <tr><th>Product Name</th><th>Category</th><th>Price (₹)</th></tr>\n      </thead>\n      <tbody>\n        <tr ng-repeat=\"p in products | filter:searchQuery\">\n          <td><strong>{{ p.name }}</strong></td>\n          <td>{{ p.category }}</td>\n          <td class=\"price\">{{ p.price | currency:'₹ ' }}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <script>\n    angular.module(\"catalogApp\", []).controller(\"CatalogCtrl\", function($scope) {\n      $scope.products = [\n        { name: \"Gaming Laptop\", category: \"Computers\", price: 65000 },\n        { name: \"Wireless Mechanical Keyboard\", category: \"Peripherals\", price: 3200 },\n        { name: \"Optical Ergonomic Mouse\", category: \"Peripherals\", price: 1200 },\n        { name: \"External Solid State Drive 1TB\", category: \"Storage\", price: 6900 },\n        { name: \"27-inch 4K Monitor\", category: \"Displays\", price: 24000 }\n      ];\n    });\n  </script>\n</body>\n</html>",
        "explanation": "Uses AngularJS pipe filter syntax `ng-repeat='p in products | filter:searchQuery'` to instantly filter table rows against model text as the user types.",
        "viva": [
          "How does the AngularJS filter:query pipe work? — It performs a substring match against all object properties in the array and returns only matching elements.",
          "What is currency filter? — It formats a number as currency with symbol and decimal formatting (e.g. currency:'₹ ').",
          "Can the search be targeted to only one specific field? — Yes, using filter:{name: searchQuery}."
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>JavaScript Calculator</title>\n  <style>\n    body { font-family: 'Segoe UI', Tahoma, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #0f172a; margin: 0; }\n    .calculator { background: #1e293b; padding: 25px; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); width: 300px; border: 1px solid #334155; }\n    .display { width: 100%; height: 60px; background: #0f172a; border: 1px solid #334155; border-radius: 8px; color: #38bdf8; font-size: 26px; text-align: right; padding: 12px; box-sizing: border-box; font-family: monospace; margin-bottom: 20px; outline: none; }\n    .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }\n    button { height: 50px; font-size: 18px; font-weight: bold; border-radius: 8px; border: none; cursor: pointer; transition: 0.15s; background: #334155; color: white; }\n    button:hover { background: #475569; }\n    .btn-op { background: #0284c7; color: white; }\n    .btn-op:hover { background: #0369a1; }\n    .btn-equal { background: #16a34a; grid-column: span 2; }\n    .btn-equal:hover { background: #15803d; }\n    .btn-clear { background: #dc2626; }\n    .btn-clear:hover { background: #b91c1c; }\n  </style>\n</head>\n<body>\n  <div class=\"calculator\">\n    <input type=\"text\" id=\"display\" class=\"display\" readonly value=\"0\">\n    <div class=\"grid\">\n      <button class=\"btn-clear\" onclick=\"clearDisplay()\">C</button>\n      <button onclick=\"appendChar('/')\" class=\"btn-op\">&divide;</button>\n      <button onclick=\"appendChar('*')\" class=\"btn-op\">&times;</button>\n      <button onclick=\"appendChar('-')\" class=\"btn-op\">&minus;</button>\n\n      <button onclick=\"appendChar('7')\">7</button>\n      <button onclick=\"appendChar('8')\">8</button>\n      <button onclick=\"appendChar('9')\">9</button>\n      <button onclick=\"appendChar('+')\" class=\"btn-op\">+</button>\n\n      <button onclick=\"appendChar('4')\">4</button>\n      <button onclick=\"appendChar('5')\">5</button>\n      <button onclick=\"appendChar('6')\">6</button>\n      <button onclick=\"appendChar('.')\">.</button>\n\n      <button onclick=\"appendChar('1')\">1</button>\n      <button onclick=\"appendChar('2')\">2</button>\n      <button onclick=\"appendChar('3')\">3</button>\n      <button onclick=\"appendChar('0')\">0</button>\n\n      <button class=\"btn-equal\" onclick=\"calculateResult()\">=</button>\n    </div>\n  </div>\n\n  <script>\n    let expr = \"\";\n    const disp = document.getElementById(\"display\");\n\n    function appendChar(c) {\n      if (disp.value === \"0\" && !isNaN(c)) expr = \"\";\n      expr += c;\n      disp.value = expr;\n    }\n\n    function clearDisplay() {\n      expr = \"\";\n      disp.value = \"0\";\n    }\n\n    function calculateResult() {\n      try {\n        // Sanitize: only allow numbers, dots, and operators\n        if (!/^[0-9+\\-*\\/.]+$/.test(expr)) throw new Error(\"Invalid Input\");\n        const res = Function(`'use strict'; return (${expr})`)();\n        disp.value = res;\n        expr = String(res);\n      } catch (err) {\n        disp.value = \"Error\";\n        expr = \"\";\n      }\n    }\n  </script>\n</body>\n</html>",
        "explanation": "GUI calculator with a CSS grid of buttons handling digit entry, operators, clear display, and safe arithmetic evaluation via `Function()` closure.",
        "viva": [
          "Why is Function() preferred over eval() for math evaluation? — Function() executes in isolated global scope without accessing local scope closures.",
          "How is the display kept safe from malicious input? — By verifying the string with /^[0-9+\\-*\\/.]+$/ before execution.",
          "What CSS property arranges the 4x4 calculator grid? — display: grid with grid-template-columns: repeat(4, 1fr)."
        ]
      },
      {
        "number": 2,
        "question": "Create a registration form using AngularJS. Apply required, minlength and pattern validation and display errors using form state properties such as $dirty and $invalid.",
        "language": "AngularJS",
        "code": "<!DOCTYPE html>\n<html ng-app=\"formApp\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>AngularJS Form Validation</title>\n  <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js\"></script>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 25px; background: #f8fafc; }\n    .card { max-width: 420px; background: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }\n    h2 { color: #1e3a8a; margin-top: 0; }\n    .field { margin-bottom: 15px; }\n    label { display: block; font-weight: bold; margin-bottom: 4px; }\n    input { width: 100%; padding: 8px; box-sizing: border-box; border: 1px solid #cbd5e1; border-radius: 4px; }\n    input.ng-invalid.ng-touched { border-color: #dc2626; }\n    input.ng-valid.ng-touched { border-color: #16a34a; }\n    .err-msg { color: #dc2626; font-size: 13px; margin-top: 4px; }\n    button { background: #2563eb; color: white; padding: 10px; border: none; border-radius: 4px; width: 100%; font-weight: bold; cursor: pointer; }\n    button:disabled { background: #94a3b8; cursor: not-allowed; }\n  </style>\n</head>\n<body ng-controller=\"FormCtrl\">\n  <div class=\"card\">\n    <h2>AngularJS Form Validation</h2>\n    <form name=\"regForm\" novalidate ng-submit=\"submitForm()\">\n      <!-- Username Field -->\n      <div class=\"field\">\n        <label>Username (Min 4 chars):</label>\n        <input type=\"text\" name=\"uName\" ng-model=\"user.name\" required ng-minlength=\"4\">\n        <div class=\"err-msg\" ng-show=\"regForm.uName.$dirty && regForm.uName.$invalid\">\n          <span ng-show=\"regForm.uName.$error.required\">Username is required.</span>\n          <span ng-show=\"regForm.uName.$error.minlength\">Must be at least 4 characters long.</span>\n        </div>\n      </div>\n\n      <!-- Phone Field -->\n      <div class=\"field\">\n        <label>Mobile Number (10 digits):</label>\n        <input type=\"text\" name=\"uPhone\" ng-model=\"user.phone\" required ng-pattern=\"/^[0-9]{10}$/\">\n        <div class=\"err-msg\" ng-show=\"regForm.uPhone.$dirty && regForm.uPhone.$invalid\">\n          <span ng-show=\"regForm.uPhone.$error.required\">Phone number is required.</span>\n          <span ng-show=\"regForm.uPhone.$error.pattern\">Must be exactly 10 numeric digits.</span>\n        </div>\n      </div>\n\n      <button type=\"submit\" ng-disabled=\"regForm.$invalid\">Complete Registration</button>\n    </form>\n  </div>\n\n  <script>\n    angular.module(\"formApp\", []).controller(\"FormCtrl\", function($scope) {\n      $scope.user = {};\n      $scope.submitForm = function() {\n        alert(\"Registration successfully submitted!\");\n      };\n    });\n  </script>\n</body>\n</html>",
        "explanation": "Uses AngularJS form properties (`$dirty`, `$invalid`, `$error.required`, `$error.minlength`, `$error.pattern`) to display granular validation messages and disable the submit button.",
        "viva": [
          "What does $dirty mean in AngularJS forms? — The control's value has been modified by the user.",
          "What does $invalid indicate? — The field currently fails one or more validation directives.",
          "Why add the novalidate attribute to the <form>? — It disables the browser's native HTML5 validation bubbles, letting AngularJS handle validation displays."
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Array Insert & Sort</title>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 25px; background: #f8fafc; }\n    .card { max-width: 480px; background: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }\n    input { width: 70%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; }\n    button { padding: 8px 14px; background: #2563eb; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; }\n    .box { background: #f1f5f9; padding: 10px; border-radius: 4px; font-family: monospace; font-size: 15px; margin: 10px 0; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Dynamic Array Manager</h2>\n    <div>\n      <input type=\"text\" id=\"valInput\" placeholder=\"Enter number or word\">\n      <button onclick=\"addItem()\">Insert</button>\n    </div>\n    <div style=\"margin-top:15px;\">\n      <button onclick=\"sortItems()\">Sort Array</button>\n      <button onclick=\"clearItems()\" style=\"background:#dc2626;\">Clear</button>\n    </div>\n\n    <h3>Original Array:</h3>\n    <div id=\"origDisplay\" class=\"box\">[]</div>\n\n    <h3>Sorted Array:</h3>\n    <div id=\"sortedDisplay\" class=\"box\">[]</div>\n  </div>\n\n  <script>\n    let list = [];\n\n    function addItem() {\n      const v = document.getElementById(\"valInput\").value.trim();\n      if (!v) return;\n      list.push(isNaN(v) ? v : Number(v));\n      document.getElementById(\"valInput\").value = \"\";\n      update();\n    }\n\n    function sortItems() {\n      const sorted = [...list].sort((a, b) => {\n        if (typeof a === \"number\" && typeof b === \"number\") return a - b;\n        return String(a).localeCompare(String(b));\n      });\n      document.getElementById(\"sortedDisplay\").textContent = JSON.stringify(sorted);\n    }\n\n    function clearItems() {\n      list = [];\n      update();\n      document.getElementById(\"sortedDisplay\").textContent = \"[]\";\n    }\n\n    function update() {\n      document.getElementById(\"origDisplay\").textContent = JSON.stringify(list);\n    }\n  </script>\n</body>\n</html>",
        "explanation": "Demonstrates array insertion with `push()`, shallow copying via `[...list]`, and sorting with comparator handling both numeric and alphabetical values.",
        "viva": [
          "What does array.push() return? — It appends the element and returns the new length of the array.",
          "Why is [...list] used before sort()? — It clones the array so the original order remains intact.",
          "What is the difference between push() and unshift()? — push() appends to the end; unshift() prepends to the beginning."
        ]
      },
      {
        "number": 2,
        "question": "Maintain a list of student records in an AngularJS controller. Accept a student name in a search field and display matching records dynamically.",
        "language": "AngularJS",
        "code": "<!DOCTYPE html>\n<html ng-app=\"filterApp\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Student Directory Search</title>\n  <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js\"></script>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 25px; background: #f8fafc; }\n    .card { max-width: 550px; background: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }\n    input { width: 100%; padding: 10px; border: 2px solid #2563eb; border-radius: 6px; box-sizing: border-box; margin-bottom: 15px; }\n    table { width: 100%; border-collapse: collapse; }\n    th, td { border: 1px solid #cbd5e1; padding: 10px; text-align: left; }\n    th { background: #1e3a8a; color: white; }\n  </style>\n</head>\n<body ng-controller=\"FilterCtrl\">\n  <div class=\"card\">\n    <h2>Student Search Directory</h2>\n    <input type=\"text\" ng-model=\"searchStudent.name\" placeholder=\"Type name to filter students...\">\n\n    <table>\n      <thead>\n        <tr><th>Roll Number</th><th>Student Name</th><th>Branch</th></tr>\n      </thead>\n      <tbody>\n        <tr ng-repeat=\"s in students | filter:searchStudent\">\n          <td>{{ s.roll }}</td>\n          <td><strong>{{ s.name }}</strong></td>\n          <td>{{ s.branch }}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <script>\n    angular.module(\"filterApp\", []).controller(\"FilterCtrl\", function($scope) {\n      $scope.students = [\n        { roll: \"101\", name: \"Kavya Menon\", branch: \"CSE\" },\n        { roll: \"102\", name: \"Siddharth Rao\", branch: \"IT\" },\n        { roll: \"103\", name: \"Pooja Hegde\", branch: \"CSE\" },\n        { roll: \"104\", name: \"Karan Johar\", branch: \"ECE\" }\n      ];\n    });\n  </script>\n</body>\n</html>",
        "explanation": "Uses targeted object property filtering `filter:searchStudent` with `ng-model='searchStudent.name'` to filter students exclusively by name.",
        "viva": [
          "How do you restrict the filter to match only the name property? — By setting ng-model='searchStudent.name' and piping filter:searchStudent.",
          "What happens if no students match the query? — The ng-repeat renders 0 rows automatically.",
          "How can you display an empty state message? — Using ng-show='(students | filter:searchStudent).length === 0'."
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Multiplication Table</title>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 25px; background: #f8fafc; }\n    .box { max-width: 350px; background: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }\n    input { width: 100%; padding: 8px; margin: 10px 0; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }\n    button { background: #2563eb; color: white; padding: 10px; border: none; border-radius: 4px; width: 100%; font-weight: bold; cursor: pointer; }\n    table { width: 100%; border-collapse: collapse; margin-top: 15px; }\n    th, td { border: 1px solid #cbd5e1; padding: 8px; text-align: center; }\n    th { background: #1e3a8a; color: white; }\n    tr:nth-child(even) { background: #f1f5f9; }\n  </style>\n</head>\n<body>\n  <div class=\"box\">\n    <h2>Multiplication Table</h2>\n    <label>Enter Number:</label>\n    <input type=\"number\" id=\"numInput\" value=\"8\">\n    <button onclick=\"renderTable()\">Generate Table</button>\n    <div id=\"tableContainer\"></div>\n  </div>\n\n  <script>\n    function renderTable() {\n      const n = Number(document.getElementById(\"numInput\").value);\n      if (isNaN(n)) return;\n\n      let html = \"<table><tr><th>Multiplier</th><th>Calculation</th><th>Result</th></tr>\";\n      for (let i = 1; i <= 10; i++) {\n        html += `<tr><td>${i}</td><td>${n} &times; ${i}</td><td style=\"font-weight:bold;color:#16a34a;\">${n * i}</td></tr>`;\n      }\n      html += \"</table>\";\n      document.getElementById(\"tableContainer\").innerHTML = html;\n    }\n    renderTable();\n  </script>\n</body>\n</html>",
        "explanation": "Generates an HTML table of arithmetic products using a JavaScript `for` loop running from 1 to 10.",
        "viva": [
          "What is the advantage of using template literals (backticks) to build HTML? — Allows multiline strings and readable string interpolation without tedious concatenation.",
          "What does innerHTML do? — Replaces the inner HTML markup of the target element.",
          "How can the multiplier limit be made dynamic? — By reading an additional limit input field."
        ]
      },
      {
        "number": 2,
        "question": "Create a text input bound with ng-model and display a greeting such as Hello, followed by the entered name, using two-way data binding.",
        "language": "AngularJS",
        "code": "<!DOCTYPE html>\n<html ng-app>\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Two-Way Binding Greeting</title>\n  <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js\"></script>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 30px; background: #f8fafc; }\n    .card { max-width: 400px; background: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }\n    h2 { color: #1e3a8a; }\n    input { width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 4px; box-sizing: border-box; font-size: 16px; margin: 10px 0; }\n    .greeting { font-size: 20px; font-weight: bold; color: #16a34a; background: #f0fdf4; border: 1px solid #86efac; padding: 15px; border-radius: 6px; margin-top: 15px; }\n  </style>\n</head>\n<body ng-init=\"userName='World'\">\n  <div class=\"card\">\n    <h2>Two-Way Greeting</h2>\n    <label>Enter Your Name:</label>\n    <input type=\"text\" ng-model=\"userName\" placeholder=\"Type name here...\">\n\n    <div class=\"greeting\">\n      Hello, {{ userName || 'Stranger' }}! 👋\n    </div>\n  </div>\n</body>\n</html>",
        "explanation": "Demonstrates fundamental two-way binding using `ng-model='userName'` and template expression `{{ userName }}`.",
        "viva": [
          "What makes two-way data binding unique in AngularJS? — It removes the need for manual event listeners like 'input' or 'keyup' to synchronize values with the UI.",
          "What is dirty checking? — The mechanism where AngularJS checks if any watched scope values have changed during each digest cycle.",
          "What is the performance implication of too many watchers? — Having thousands of watchers can slow down digest cycle execution in very large apps."
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Vowel Counter</title>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 25px; background: #f8fafc; }\n    .box { max-width: 480px; background: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }\n    textarea { width: 100%; height: 90px; padding: 10px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; margin: 10px 0; }\n    button { background: #2563eb; color: white; padding: 10px 16px; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; }\n    .res-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; margin-top: 15px; }\n    .v-pill { background: #eff6ff; border: 1px solid #bfdbfe; padding: 10px; border-radius: 6px; text-align: center; font-weight: bold; }\n  </style>\n</head>\n<body>\n  <div class=\"box\">\n    <h2>Vowel Counter Studio</h2>\n    <label>Enter Sentence or Paragraph:</label>\n    <textarea id=\"strInput\">Web Technologies Laboratory Exam Practice Studio</textarea>\n    <button onclick=\"countVowels()\">Count Vowels</button>\n\n    <h3 style=\"margin-top:20px;\">Total Vowels: <span id=\"totalVowels\" style=\"color:#2563eb;\">0</span></h3>\n    <div class=\"res-grid\" id=\"vowelBreakdown\"></div>\n  </div>\n\n  <script>\n    function countVowels() {\n      const text = document.getElementById(\"strInput\").value.toLowerCase();\n      const counts = { a: 0, e: 0, i: 0, o: 0, u: 0 };\n      let total = 0;\n\n      for (const char of text) {\n        if (counts.hasOwnProperty(char)) {\n          counts[char]++;\n          total++;\n        }\n      }\n\n      document.getElementById(\"totalVowels\").textContent = total;\n      let html = \"\";\n      for (const [v, count] of Object.entries(counts)) {\n        html += `<div class=\"v-pill\">${v.toUpperCase()}<br><span style=\"font-size:20px;color:#2563eb;\">${count}</span></div>`;\n      }\n      document.getElementById(\"vowelBreakdown\").innerHTML = html;\n    }\n    countVowels();\n  </script>\n</body>\n</html>",
        "explanation": "Iterates through the string case-insensitively using `for (const char of text.toLowerCase())` and tallies occurrences of vowels 'a, e, i, o, u'.",
        "viva": [
          "Why call toLowerCase() before checking vowels? — To ensure case-insensitive matching without needing separate conditions for A, E, I, O, U.",
          "What does hasOwnProperty() do? — Checks if the object contains the character as its own property in O(1) time.",
          "How can vowels be counted using regular expressions? — Using (text.match(/[aeiou]/gi) || []).length."
        ]
      },
      {
        "number": 2,
        "question": "Create a list of names and use AngularJS filters to display names in uppercase and in alphabetical order.",
        "language": "AngularJS",
        "code": "<!DOCTYPE html>\n<html ng-app=\"namesApp\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>AngularJS Uppercase & OrderBy</title>\n  <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js\"></script>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 25px; background: #f8fafc; }\n    .card { max-width: 420px; background: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }\n    h2 { color: #1e3a8a; }\n    ol { padding-left: 20px; }\n    li { padding: 6px 0; font-size: 16px; font-weight: 500; }\n  </style>\n</head>\n<body ng-controller=\"NamesCtrl\">\n  <div class=\"card\">\n    <h2>Sorted Uppercase Names</h2>\n    <p style=\"color:#64748b;\">Filtered via <code>| orderBy | uppercase</code>:</p>\n    <ol>\n      <li ng-repeat=\"name in names | orderBy:identity\">{{ name | uppercase }}</li>\n    </ol>\n  </div>\n\n  <script>\n    angular.module(\"namesApp\", []).controller(\"NamesCtrl\", function($scope) {\n      $scope.names = [\"Vikram\", \"Sneha\", \"Ananya\", \"Rohan\", \"Bhavna\", \"Kiran\"];\n      $scope.identity = function(x) { return x; };\n    });\n  </script>\n</body>\n</html>",
        "explanation": "Applies multiple AngularJS filters: `orderBy` to alphabetize names and `uppercase` filter to display names in capital letters.",
        "viva": [
          "What does the pipe (|) operator indicate in AngularJS? — It pipes data from the expression to a transformer filter.",
          "Can filters be chained in AngularJS? — Yes, e.g. {{ value | filter1 | filter2 }}.",
          "What is the difference between uppercase filter and CSS text-transform: uppercase? — The filter alters the actual string data in the template; CSS only alters the visual display font."
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Even or Odd Checker</title>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 25px; background: #f8fafc; }\n    .box { max-width: 380px; background: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }\n    input { width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #cbd5e1; border-radius: 4px; box-sizing: border-box; }\n    button { background: #2563eb; color: white; padding: 10px 16px; border: none; border-radius: 4px; font-weight: bold; width: 100%; cursor: pointer; }\n    .res { margin-top: 15px; padding: 12px; border-radius: 6px; font-weight: bold; text-align: center; font-size: 16px; }\n    .even { background: #dcfce7; color: #15803d; border: 1px solid #86efac; }\n    .odd { background: #fef3c7; color: #b45309; border: 1px solid #fde68a; }\n  </style>\n</head>\n<body>\n  <div class=\"box\">\n    <h2>Even or Odd Checker</h2>\n    <label>Enter an Integer:</label>\n    <input type=\"number\" id=\"numInput\" value=\"42\">\n    <button onclick=\"checkEvenOdd()\">Determine Even/Odd</button>\n    <div id=\"result\"></div>\n  </div>\n\n  <script>\n    function checkEvenOdd() {\n      const v = document.getElementById(\"numInput\").value.trim();\n      const out = document.getElementById(\"result\");\n\n      if (v === \"\" || isNaN(v)) {\n        out.className = \"res\";\n        out.textContent = \"Please enter a valid number.\";\n        return;\n      }\n\n      const n = Number(v);\n      if (n % 2 === 0) {\n        out.className = \"res even\";\n        out.textContent = `${n} is an EVEN number.`;\n      } else {\n        out.className = \"res odd\";\n        out.textContent = `${n} is an ODD number.`;\n      }\n    }\n    checkEvenOdd();\n  </script>\n</body>\n</html>",
        "explanation": "Uses the modulus operator `% 2 === 0` to identify even integers and displays formatted color-coded status banners.",
        "viva": [
          "How does the % modulus operator work? — It returns the remainder after integer division; n % 2 yields 0 for even numbers and 1 or -1 for odd numbers.",
          "Is 0 even or odd? — 0 is an even number because 0 % 2 === 0.",
          "Can bitwise operators check even/odd? — Yes, (n & 1) === 0 checks if the least significant bit is 0."
        ]
      },
      {
        "number": 2,
        "question": "Develop a student form with name, email and password fields. Use AngularJS validation directives and display suitable messages for invalid entries.",
        "language": "AngularJS",
        "code": "<!DOCTYPE html>\n<html ng-app=\"app\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Student Validation Form</title>\n  <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js\"></script>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 25px; background: #f8fafc; }\n    .card { max-width: 400px; background: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }\n    h2 { color: #1e3a8a; }\n    .field { margin-bottom: 15px; }\n    label { display: block; font-weight: bold; margin-bottom: 4px; }\n    input { width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; box-sizing: border-box; }\n    .err { color: #dc2626; font-size: 13px; margin-top: 4px; }\n    button { background: #2563eb; color: white; padding: 10px; border: none; border-radius: 4px; width: 100%; font-weight: bold; cursor: pointer; }\n    button:disabled { background: #cbd5e1; cursor: not-allowed; }\n  </style>\n</head>\n<body ng-controller=\"Ctrl\">\n  <div class=\"card\">\n    <h2>Student Admission Form</h2>\n    <form name=\"sForm\" novalidate ng-submit=\"submit()\">\n      <div class=\"field\">\n        <label>Name:</label>\n        <input type=\"text\" name=\"name\" ng-model=\"data.name\" required>\n        <div class=\"err\" ng-show=\"sForm.name.$touched && sForm.name.$invalid\">Name is required.</div>\n      </div>\n      <div class=\"field\">\n        <label>Email:</label>\n        <input type=\"email\" name=\"email\" ng-model=\"data.email\" required>\n        <div class=\"err\" ng-show=\"sForm.email.$touched && sForm.email.$invalid\">Valid email is required.</div>\n      </div>\n      <div class=\"field\">\n        <label>Password (Min 6 chars):</label>\n        <input type=\"password\" name=\"pass\" ng-model=\"data.pass\" required ng-minlength=\"6\">\n        <div class=\"err\" ng-show=\"sForm.pass.$touched && sForm.pass.$invalid\">Password must be at least 6 characters.</div>\n      </div>\n      <button type=\"submit\" ng-disabled=\"sForm.$invalid\">Enroll Student</button>\n    </form>\n  </div>\n  <script>\n    angular.module(\"app\", []).controller(\"Ctrl\", function($scope) {\n      $scope.data = {};\n      $scope.submit = function() { alert(\"Form valid & submitted!\"); };\n    });\n  </script>\n</body>\n</html>",
        "explanation": "Uses AngularJS form states `$touched` and `$invalid` to show validation warnings conditionally only after the user leaves the input.",
        "viva": [
          "What is $touched in AngularJS? — It flags true once the user has focused and then blurred out of the input control.",
          "Why check $touched before showing errors? — To avoid showing aggressive red error messages before the user even finishes typing.",
          "What does type='email' enable in AngularJS? — It invokes AngularJS's built-in email validator directive."
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Sum Calculator</title>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 25px; background: #f8fafc; }\n    .box { max-width: 380px; background: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }\n    h2 { color: #1e3a8a; }\n    input { width: 100%; padding: 8px; margin: 8px 0 15px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }\n    button { background: #2563eb; color: white; padding: 10px 18px; border: none; border-radius: 4px; font-weight: bold; width: 100%; cursor: pointer; }\n    .sum-box { margin-top: 18px; padding: 14px; background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 6px; font-size: 18px; font-weight: bold; color: #1d4ed8; text-align: center; }\n  </style>\n</head>\n<body>\n  <div class=\"box\">\n    <h2>Dynamic Sum Calculator</h2>\n    <label>First Number:</label>\n    <input type=\"number\" id=\"numA\" value=\"125\">\n\n    <label>Second Number:</label>\n    <input type=\"number\" id=\"numB\" value=\"75\">\n\n    <button onclick=\"calculateSum()\">Calculate Sum</button>\n    <div id=\"sumResult\" class=\"sum-box\">Sum = 200</div>\n  </div>\n\n  <script>\n    function calculateSum() {\n      const a = parseFloat(document.getElementById(\"numA\").value) || 0;\n      const b = parseFloat(document.getElementById(\"numB\").value) || 0;\n      const sum = a + b;\n      document.getElementById(\"sumResult\").textContent = `${a} + ${b} = ${sum}`;\n    }\n    calculateSum();\n  </script>\n</body>\n</html>",
        "explanation": "Retrieves input values using `parseFloat()`, adds them, and dynamically updates the DOM text content without refreshing.",
        "viva": [
          "Why use parseFloat() or Number() on input values? — Input.value always returns a string; without conversion, + performs string concatenation.",
          "What does || 0 do? — It provides a safe fallback of 0 if parseFloat returns NaN.",
          "What is the difference between parseInt() and parseFloat()? — parseInt discards decimal fractional parts; parseFloat retains decimals."
        ]
      },
      {
        "number": 2,
        "question": "Create a course registration form using AngularJS directives and ng-model. Display the selected course and entered student details dynamically.",
        "language": "AngularJS",
        "code": "<!DOCTYPE html>\n<html ng-app>\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Course Enrollment</title>\n  <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js\"></script>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 25px; background: #f8fafc; }\n    .card { max-width: 500px; background: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }\n    h2 { color: #1e3a8a; }\n    input, select { width: 100%; padding: 8px; margin: 8px 0 15px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }\n    .summary { background: #f0fdf4; border: 1px solid #86efac; padding: 15px; border-radius: 6px; }\n  </style>\n</head>\n<body ng-init=\"std={name:'Sanjay Kumar', course:'Cloud Computing Fundamentals'}\">\n  <div class=\"card\">\n    <h2>Course Registration Portal</h2>\n    <label>Student Full Name:</label>\n    <input type=\"text\" ng-model=\"std.name\">\n\n    <label>Choose Elective Course:</label>\n    <select ng-model=\"std.course\">\n      <option value=\"Web Technologies Advanced\">Web Technologies Advanced</option>\n      <option value=\"Cloud Computing Fundamentals\">Cloud Computing Fundamentals</option>\n      <option value=\"Machine Learning with Python\">Machine Learning with Python</option>\n      <option value=\"Cybersecurity and Cryptography\">Cybersecurity and Cryptography</option>\n    </select>\n\n    <div class=\"summary\">\n      <h3 style=\"color:#15803d;margin-top:0;\">Registration Summary</h3>\n      <p>Student Name: <strong>{{ std.name || 'Not specified' }}</strong></p>\n      <p>Selected Course: <strong>{{ std.course }}</strong></p>\n    </div>\n  </div>\n</body>\n</html>",
        "explanation": "Uses an object model `std.name` and `std.course` bound with `ng-model` to dynamically render a synchronized enrollment receipt.",
        "viva": [
          "Why group model properties inside an object like std.name? — It avoids prototypal inheritance scoping bugs in child scopes.",
          "How can this be wired to submit data to a REST API? — Using the AngularJS $http service ($http.post('/api/enroll', $scope.std)).",
          "What is the role of ng-init in prototypes? — Allows declaring initial test state without needing a dedicated controller script."
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Color Palette Studio</title>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 30px; transition: background-color 0.4s ease; min-height: 100vh; margin: 0; }\n    .card { max-width: 450px; margin: auto; background: white; padding: 25px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.15); text-align: center; }\n    h2 { color: #1e293b; }\n    .palette { display: flex; justify-content: center; gap: 12px; margin: 20px 0; }\n    .swatch { width: 45px; height: 45px; border-radius: 50%; cursor: pointer; border: 3px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.2); transition: transform 0.2s; }\n    .swatch:hover { transform: scale(1.15); }\n    .btn-row { display: flex; justify-content: center; gap: 10px; }\n    button { padding: 8px 16px; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; color: white; }\n  </style>\n</head>\n<body id=\"bgBody\">\n  <div class=\"card\">\n    <h2>Interactive Color Palette</h2>\n    <p>Click or hover over any color swatch to change the background:</p>\n    \n    <div class=\"palette\">\n      <div class=\"swatch\" style=\"background:#3b82f6;\" onclick=\"setBg('#3b82f6')\" onmouseover=\"previewBg('#3b82f6')\"></div>\n      <div class=\"swatch\" style=\"background:#10b981;\" onclick=\"setBg('#10b981')\" onmouseover=\"previewBg('#10b981')\"></div>\n      <div class=\"swatch\" style=\"background:#f59e0b;\" onclick=\"setBg('#f59e0b')\" onmouseover=\"previewBg('#f59e0b')\"></div>\n      <div class=\"swatch\" style=\"background:#8b5cf6;\" onclick=\"setBg('#8b5cf6')\" onmouseover=\"previewBg('#8b5cf6')\"></div>\n      <div class=\"swatch\" style=\"background:#ef4444;\" onclick=\"setBg('#ef4444')\" onmouseover=\"previewBg('#ef4444')\"></div>\n    </div>\n\n    <div class=\"btn-row\">\n      <button style=\"background:#0f172a;\" onclick=\"setBg('#0f172a')\">Dark Mode</button>\n      <button style=\"background:#64748b;\" onclick=\"setBg('#f8fafc')\">Reset Light</button>\n    </div>\n  </div>\n\n  <script>\n    function setBg(color) {\n      document.body.style.backgroundColor = color;\n    }\n    function previewBg(color) {\n      document.body.style.backgroundColor = color;\n    }\n  </script>\n</body>\n</html>",
        "explanation": "Uses JavaScript DOM `document.body.style.backgroundColor` on `onclick` and `onmouseover` event listeners with CSS `transition` for smooth color changes.",
        "viva": [
          "How does transition: background-color 0.4s ease work? — It animates the background color change smoothly over 400ms instead of an abrupt flash.",
          "What is the difference between onclick and onmouseover? — onclick fires when mouse is clicked; onmouseover fires immediately when pointer enters the element.",
          "How can the user's selected background color be saved across visits? — By storing the hex color string in localStorage.setItem('userBg', color)."
        ]
      },
      {
        "number": 2,
        "question": "Write and execute a Node.js program that displays Hello World in the console.",
        "language": "Node.js",
        "code": "// app.js - Hello World in Node.js\nconsole.log(\"=========================================\");\nconsole.log(\"  Hello World from Node.js Runtime!      \");\nconsole.log(\"=========================================\");\n\n// Print runtime details\nconsole.log(\"Node.js Version: \" + process.version);\nconsole.log(\"Current Platform: \" + process.platform);\nconsole.log(\"Current Directory: \" + process.cwd());\nconsole.log(\"System Uptime (seconds): \" + Math.round(process.uptime()));",
        "explanation": "Basic Node.js program executed via `node app.js`, printing greetings and runtime environment properties from the `process` global.",
        "viva": [
          "What is Node.js? — An open-source, cross-platform JavaScript runtime built on Chrome's V8 JavaScript engine for server-side development.",
          "How do you run a Node.js file from terminal? — By running node <filename.js>.",
          "What is the process object in Node.js? — A global object providing information and control over the current Node.js process."
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>DOM Element Manipulation</title>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 25px; background: #f8fafc; }\n    .card { max-width: 500px; background: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }\n    h2 { color: #1e3a8a; }\n    .target-box { background: #f1f5f9; padding: 15px; border: 2px dashed #94a3b8; border-radius: 6px; margin: 15px 0; font-size: 16px; }\n    .btn-group { display: flex; gap: 8px; flex-wrap: wrap; }\n    button { padding: 8px 14px; background: #2563eb; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; }\n    button:hover { background: #1d4ed8; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Dynamic DOM Manipulation</h2>\n    <div id=\"targetElement\" class=\"target-box\">\n      Original Content (Click buttons below to modify)\n    </div>\n\n    <div class=\"btn-group\">\n      <button onclick=\"changeText()\">Change Text</button>\n      <button onclick=\"changeStyle()\">Change Style</button>\n      <button onclick=\"changeHtml()\">Change HTML</button>\n      <button onclick=\"resetBox()\" style=\"background:#64748b;\">Reset</button>\n    </div>\n  </div>\n\n  <script>\n    const el = document.getElementById(\"targetElement\");\n\n    function changeText() {\n      // Modifies text content\n      el.textContent = \"Text updated dynamically via textContent at \" + new Date().toLocaleTimeString();\n    }\n\n    function changeStyle() {\n      // Modifies inline style properties\n      el.style.backgroundColor = \"#dcfce7\";\n      el.style.borderColor = \"#16a34a\";\n      el.style.color = \"#15803d\";\n      el.style.fontWeight = \"bold\";\n      el.style.transform = \"scale(1.02)\";\n      el.style.transition = \"0.3s\";\n    }\n\n    function changeHtml() {\n      // Modifies innerHTML with complex tags\n      el.innerHTML = \"<h3>⭐ Special Announcement</h3><p>Content replaced via <strong>innerHTML</strong>!</p>\";\n    }\n\n    function resetBox() {\n      el.textContent = \"Original Content (Click buttons below to modify)\";\n      el.style = \"\";\n    }\n  </script>\n</body>\n</html>",
        "explanation": "Uses `document.getElementById` to modify element properties: `textContent`, `style`, and `innerHTML` in response to click events.",
        "viva": [
          "What is the difference between textContent and innerHTML? — textContent reads and writes pure text safely; innerHTML parses and renders HTML markup tags.",
          "What does querySelector() do? — It returns the first element matching any CSS selector query (e.g. querySelector('.card > p')).",
          "Why is textContent preferred when displaying user input? — It prevents Cross-Site Scripting (XSS) because tags are treated as plain text characters."
        ]
      },
      {
        "number": 2,
        "question": "Create a web server using the Node.js HTTP module. Listen on a specified port and respond to browser requests with a text message.",
        "language": "Node.js",
        "code": "// server.js - Node.js HTTP Web Server\nconst http = require('http');\n\nconst PORT = 3000;\nconst HOST = 'localhost';\n\nconst server = http.createServer((req, res) => {\n  console.log(`[${new Date().toISOString()}] ${req.method} request received for: ${req.url}`);\n\n  // Set HTTP response headers\n  res.writeHead(200, {\n    'Content-Type': 'text/html; charset=utf-8'\n  });\n\n  // Send HTML response body\n  res.end(`\n    <!DOCTYPE html>\n    <html>\n    <head><title>Node.js Server</title></head>\n    <body style=\"font-family:Arial;padding:30px;background:#f8fafc;\">\n      <h1 style=\"color:#1e3a8a;\">Hello from Node.js HTTP Server!</h1>\n      <p>Server running successfully on port <strong>${PORT}</strong>.</p>\n      <p>Requested URL Path: <code>${req.url}</code></p>\n    </body>\n    </html>\n  `);\n});\n\nserver.listen(PORT, HOST, () => {\n  console.log(`Server is listening at http://${HOST}:${PORT}/`);\n});",
        "explanation": "Uses built-in `http` module to create an HTTP server with `http.createServer((req, res) => {...})` listening on port 3000.",
        "viva": [
          "What is the role of res.writeHead()? — It sends the HTTP status code (200 OK) and response headers to the client.",
          "What is the role of res.end()? — It signals to the server that all response headers and body have been sent; finishes the response stream.",
          "How do you stop a Node.js server running in terminal? — Press Ctrl + C."
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Event Handling Demo</title>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 25px; background: #f8fafc; }\n    .card { max-width: 480px; background: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }\n    h2 { color: #1e3a8a; }\n    .interactive-card {\n      padding: 30px;\n      background: #e2e8f0;\n      border: 2px solid #94a3b8;\n      border-radius: 8px;\n      text-align: center;\n      font-size: 18px;\n      font-weight: bold;\n      color: #334155;\n      cursor: pointer;\n      transition: all 0.3s ease;\n      margin: 15px 0;\n    }\n    .status-log { background: #0f172a; color: #38bdf8; font-family: monospace; padding: 12px; border-radius: 6px; font-size: 14px; min-height: 24px; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Mouse Events Demonstration</h2>\n    \n    <div id=\"targetCard\" class=\"interactive-card\"\n         onmouseover=\"handleMouseOver()\"\n         onmouseout=\"handleMouseOut()\"\n         onclick=\"handleClick()\"\n         ondblclick=\"handleDblClick()\">\n      Interact with this box!\n    </div>\n\n    <div class=\"status-log\" id=\"eventLog\">Waiting for user interaction...</div>\n  </div>\n\n  <script>\n    const box = document.getElementById(\"targetCard\");\n    const log = document.getElementById(\"eventLog\");\n\n    function handleMouseOver() {\n      box.style.backgroundColor = \"#bfdbfe\";\n      box.style.borderColor = \"#2563eb\";\n      box.style.color = \"#1e3a8a\";\n      box.textContent = \"Mouse Over Event Detected!\";\n      log.textContent = \"Event: mouseover triggered at \" + new Date().toLocaleTimeString();\n    }\n\n    function handleMouseOut() {\n      box.style.backgroundColor = \"#e2e8f0\";\n      box.style.borderColor = \"#94a3b8\";\n      box.style.color = \"#334155\";\n      box.textContent = \"Interact with this box!\";\n      log.textContent = \"Event: mouseout triggered.\";\n    }\n\n    function handleClick() {\n      box.style.backgroundColor = \"#dcfce7\";\n      box.style.borderColor = \"#16a34a\";\n      box.style.color = \"#15803d\";\n      box.textContent = \"Single Click Registered! (Click again or Double click)\";\n      log.textContent = \"Event: click triggered.\";\n    }\n\n    function handleDblClick() {\n      box.style.backgroundColor = \"#fef3c7\";\n      box.style.borderColor = \"#d97706\";\n      box.style.color = \"#b45309\";\n      box.textContent = \"Double Click Event Fired!\";\n      log.textContent = \"Event: dblclick triggered.\";\n    }\n  </script>\n</body>\n</html>",
        "explanation": "Handles multiple DOM mouse events: `onmouseover`, `onmouseout`, `onclick`, and `ondblclick` with synchronized visual feedback and event logging.",
        "viva": [
          "What is event bubbling in JavaScript? — The event travels upwards from the target element through its ancestors in the DOM tree.",
          "How can you attach event listeners without inline HTML attributes? — Using element.addEventListener('mouseover', callbackFunction).",
          "What is the difference between mouseover and mouseenter? — mouseover bubbles up from child elements; mouseenter does not bubble."
        ]
      },
      {
        "number": 2,
        "question": "Use the Node.js fs module to read a local text file and display its contents in the console.",
        "language": "Node.js",
        "code": "// readFile.js - Read File in Node.js\nconst fs = require('fs');\nconst path = require('path');\n\nconst filename = path.join(__dirname, 'sample.txt');\n\nconsole.log(\"Reading file: \" + filename + \"\\n\");\n\n// Asynchronous File Read (Non-blocking)\nfs.readFile(filename, 'utf8', (err, data) => {\n  if (err) {\n    console.error(\"Error reading file:\", err.message);\n    return;\n  }\n  console.log(\"----- File Contents Start -----\");\n  console.log(data);\n  console.log(\"----- File Contents End -------\");\n});",
        "explanation": "Uses Node.js built-in `fs.readFile()` with `'utf8'` encoding to asynchronously read and display file content in console.",
        "viva": [
          "Why is asynchronous fs.readFile preferred over fs.readFileSync? — fs.readFile is non-blocking and does not freeze the single-threaded Node.js event loop while waiting for disk I/O.",
          "What does the 'utf8' parameter specify? — It decodes the raw buffer bytes into a human-readable UTF-8 string.",
          "What is __dirname in Node.js? — An environment variable representing the absolute directory path of the currently executing script."
        ],
        "files": [
          {
            "name": "readFile.js",
            "code": "const fs = require('fs');\nconst path = require('path');\n\nfs.readFile(path.join(__dirname, 'sample.txt'), 'utf8', (err, data) => {\n  if (err) throw err;\n  console.log(\"File Contents:\\n\" + data);\n});"
          },
          {
            "name": "sample.txt",
            "code": "Web Technologies Laboratory\nInstitution: ABC Institute of Technology\nTopic: Node.js File System (fs) Module\nStatus: Verified and Working."
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Student Admission Form</title>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 25px; background: #f8fafc; }\n    .box { max-width: 420px; background: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); margin: auto; }\n    h2 { color: #1e3a8a; margin-top: 0; }\n    .field { margin-bottom: 14px; }\n    label { display: block; font-weight: bold; margin-bottom: 4px; }\n    input, select { width: 100%; padding: 8px; box-sizing: border-box; border: 1px solid #cbd5e1; border-radius: 4px; }\n    .error-text { color: #dc2626; font-size: 13px; margin-top: 4px; display: none; }\n    button { background: #2563eb; color: white; padding: 10px; border: none; border-radius: 4px; width: 100%; font-weight: bold; cursor: pointer; }\n    .success-badge { background: #dcfce7; color: #15803d; padding: 12px; border-radius: 6px; font-weight: bold; text-align: center; display: none; margin-bottom: 15px; }\n  </style>\n</head>\n<body>\n  <div class=\"box\">\n    <h2>Student Admission Form</h2>\n    <div id=\"successMsg\" class=\"success-badge\">✔ Application Submitted Successfully!</div>\n    \n    <form onsubmit=\"return validateStudent(event)\">\n      <div class=\"field\">\n        <label>Full Name *</label>\n        <input type=\"text\" id=\"sName\">\n        <div id=\"nameErr\" class=\"error-text\">Please enter your full name.</div>\n      </div>\n      <div class=\"field\">\n        <label>Email Address *</label>\n        <input type=\"text\" id=\"sEmail\">\n        <div id=\"emailErr\" class=\"error-text\">Please enter a valid email address.</div>\n      </div>\n      <div class=\"field\">\n        <label>Phone Number (10 digits) *</label>\n        <input type=\"text\" id=\"sPhone\" maxlength=\"10\">\n        <div id=\"phoneErr\" class=\"error-text\">Phone number must be exactly 10 digits.</div>\n      </div>\n      <div class=\"field\">\n        <label>Branch / Specialization *</label>\n        <select id=\"sBranch\">\n          <option value=\"\">-- Choose Specialization --</option>\n          <option value=\"CSE\">Computer Science</option>\n          <option value=\"IT\">Information Technology</option>\n          <option value=\"AI\">AI & Data Science</option>\n        </select>\n        <div id=\"branchErr\" class=\"error-text\">Please select a branch.</div>\n      </div>\n      <button type=\"submit\">Submit Application</button>\n    </form>\n  </div>\n\n  <script>\n    function validateStudent(e) {\n      e.preventDefault();\n      let valid = true;\n\n      // Hide previous errors\n      document.querySelectorAll(\".error-text\").forEach(d => d.style.display = \"none\");\n      document.getElementById(\"successMsg\").style.display = \"none\";\n\n      const name = document.getElementById(\"sName\").value.trim();\n      const email = document.getElementById(\"sEmail\").value.trim();\n      const phone = document.getElementById(\"sPhone\").value.trim();\n      const branch = document.getElementById(\"sBranch\").value;\n\n      if (!name) { document.getElementById(\"nameErr\").style.display = \"block\"; valid = false; }\n\n      const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n      if (!email || !emailRegex.test(email)) { document.getElementById(\"emailErr\").style.display = \"block\"; valid = false; }\n\n      const phoneRegex = /^[0-9]{10}$/;\n      if (!phone || !phoneRegex.test(phone)) { document.getElementById(\"phoneErr\").style.display = \"block\"; valid = false; }\n\n      if (!branch) { document.getElementById(\"branchErr\").style.display = \"block\"; valid = false; }\n\n      if (valid) {\n        document.getElementById(\"successMsg\").style.display = \"block\";\n      }\n      return false;\n    }\n  </script>\n</body>\n</html>",
        "explanation": "Validates mandatory fields, email regex, 10-digit phone regex, and dropdown selection before form submission.",
        "viva": [
          "What does document.querySelectorAll('.error-text') do? — Returns a NodeList of all elements matching the class selector.",
          "What does maxlength='10' enforce on the HTML input? — Prevents users from typing more than 10 characters.",
          "Why is client-side validation beneficial for user experience? — Provides instant feedback without waiting for server network roundtrips."
        ]
      },
      {
        "number": 2,
        "question": "Write a Node.js program to create or update a text file using fs.writeFile or fs.appendFile and display a success message.",
        "language": "Node.js",
        "code": "// fileWriter.js - Create and append files in Node.js\nconst fs = require('fs');\n\nconst filename = 'log.txt';\nconst initialData = \"System Log Initialized: \" + new Date().toISOString() + \"\\n\";\nconst appendData = \"User Activity Recorded: Status OK\\n\";\n\n// 1. Write File (Overwrites or creates new file)\nfs.writeFile(filename, initialData, (err) => {\n  if (err) throw err;\n  console.log(\"File '\" + filename + \"' created successfully!\");\n\n  // 2. Append File (Appends new content to existing file)\n  fs.appendFile(filename, appendData, (err2) => {\n    if (err2) throw err2;\n    console.log(\"Additional content appended successfully!\");\n\n    // Read back to confirm\n    const content = fs.readFileSync(filename, 'utf8');\n    console.log(\"\\n--- File Content ---\\n\" + content);\n  });\n});",
        "explanation": "Uses `fs.writeFile()` to create or overwrite a file and `fs.appendFile()` to append data without overwriting existing content.",
        "viva": [
          "What is the difference between fs.writeFile and fs.appendFile? — writeFile overwrites the entire file; appendFile adds content to the end of the file.",
          "What happens if the file does not exist when using fs.appendFile? — Node.js automatically creates the file.",
          "What flag can make fs.writeFile append instead? — Supplying options { flag: 'a' }."
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
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Dynamic To-Do & Item Manager</title>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 25px; background: #f8fafc; }\n    .card { max-width: 480px; margin: auto; background: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }\n    h2 { color: #1e3a8a; }\n    .input-row { display: flex; gap: 8px; margin-bottom: 20px; }\n    input { flex: 1; padding: 10px; border: 1px solid #cbd5e1; border-radius: 4px; font-size: 15px; }\n    button { background: #2563eb; color: white; padding: 10px 18px; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; }\n    ul { list-style: none; padding: 0; margin: 0; }\n    li { display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; background: #f1f5f9; border-radius: 6px; margin-bottom: 8px; }\n    .btn-del { background: #dc2626; color: white; border: none; padding: 4px 8px; border-radius: 4px; font-size: 12px; cursor: pointer; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Dynamic Item List Manager</h2>\n    <div class=\"input-row\">\n      <input type=\"text\" id=\"itemInput\" placeholder=\"Add an item...\">\n      <button onclick=\"addItem()\">Add Item</button>\n    </div>\n\n    <h3>Current Items (<span id=\"count\">0</span>):</h3>\n    <ul id=\"itemList\"></ul>\n  </div>\n\n  <script>\n    const items = [\"HTML5 Semantics\", \"CSS Flexbox & Grid\", \"JavaScript DOM Events\"];\n\n    function render() {\n      const list = document.getElementById(\"itemList\");\n      list.innerHTML = \"\";\n      items.forEach((item, index) => {\n        const li = document.createElement(\"li\");\n        li.innerHTML = `<span>${item}</span><button class=\"btn-del\" onclick=\"deleteItem(${index})\">Delete</button>`;\n        list.appendChild(li);\n      });\n      document.getElementById(\"count\").textContent = items.length;\n    }\n\n    function addItem() {\n      const input = document.getElementById(\"itemInput\");\n      const text = input.value.trim();\n      if (!text) return;\n      items.push(text);\n      input.value = \"\";\n      render();\n    }\n\n    function deleteItem(index) {\n      items.splice(index, 1);\n      render();\n    }\n    render();\n  </script>\n</body>\n</html>",
        "explanation": "Dynamic CRUD list using JavaScript array operations: `items.push()`, `items.splice(index, 1)`, and DOM updates via `document.createElement('li')`.",
        "viva": [
          "What does array.splice(index, 1) do? — It removes 1 element at the specified index and shifts following elements left.",
          "What is the difference between appendChild() and innerHTML? — appendChild adds an existing or newly created DOM node without destroying existing listeners; innerHTML parses strings and recreates child nodes.",
          "How can the list be persisted in the user's browser? — Using localStorage.setItem('items', JSON.stringify(items))."
        ]
      },
      {
        "number": 2,
        "question": "Use the events module to create a custom event named greet. Register an event listener, emit the event and display a response.",
        "language": "Node.js",
        "code": "// eventDemo.js - Custom Events in Node.js\nconst EventEmitter = require('events');\n\n// Create EventEmitter instance\nconst myEmitter = new EventEmitter();\n\n// 1. Register listener for the custom 'greet' event\nmyEmitter.on('greet', (name, role) => {\n  console.log(\"=========================================\");\n  console.log(`  Custom Event 'greet' Triggered!        `);\n  console.log(`  Welcome, ${name}! Role: [${role}]    `);\n  console.log(\"=========================================\");\n});\n\n// 2. Register a one-time listener using once()\nmyEmitter.once('welcome', () => {\n  console.log(\"One-time initialization event fired.\");\n});\n\n// 3. Emit custom events\nconsole.log(\"Emitting 'welcome' event...\");\nmyEmitter.emit('welcome');\n\nconsole.log(\"Emitting 'greet' event...\");\nmyEmitter.emit('greet', 'Shanmukha Ram', 'Full-Stack Developer');\nmyEmitter.emit('greet', 'Lab Evaluator', 'Examiner');",
        "explanation": "Uses Node.js `EventEmitter` to define custom events with `myEmitter.on('greet', handler)` and trigger them using `myEmitter.emit('greet', args)`.",
        "viva": [
          "What is the Event-Driven Architecture in Node.js? — A design paradigm where actions trigger events, and listener functions react to those events asynchronously.",
          "What is the difference between on() and once()? — on() listens indefinitely whenever the event is emitted; once() listens exactly once and automatically deregisters.",
          "How do you pass arguments when emitting an event? — By passing additional parameters to emit(), e.g. emitter.emit('event', arg1, arg2)."
        ]
      }
    ]
  }
];
