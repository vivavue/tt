<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TT</title>
  <link rel="stylesheet" href="{{ mix('css/app.css') }}">
  <meta name="csrf-token" value="{{ csrf_token() }}">
</head>
<body>
  <div id="app"></div>
  <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
