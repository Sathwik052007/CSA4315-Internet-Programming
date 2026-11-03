<html>
<body>

<h2>Student Information</h2>

<form method="post">
    Enter Name:
    <input type="text" name="name">
    <input type="submit" value="Submit">
</form>

<%
String name = request.getParameter("name");

if(name != null) {
    out.println("<h3>Welcome " + name + "</h3>");
}
%>

</body>
</html>