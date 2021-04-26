<!DOCTYPE html>
<html lang="ru">
	<head>
		<meta charset="UTF-8">
		<meta name="Keywords" content="moroz69off, veb-dev, Complex chart">
		<meta name="Description" content="Complex chart moroz69off veb-dev">
		<meta name="Author" content="moroz69off">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=3.45, minimum-scale=0.876">
		<link href="src/css/dashboard.css" rel="stylesheet">
		<link rel="stylesheet" href="src/css/bootstrap-4.5.2.min.css" type="text/css">
		<link rel="stylesheet" href="src/css/prettify.min.css" type="text/css">
		<link rel="stylesheet" href="src/css/fontawesome-5.15.1-web/all.css" type="text/css">
		<script type="text/javascript" src="src/js/jquery-3.6.0.min.js"></script>
		<script type="text/javascript" src="src/js/bootstrap.bundle-4.5.2.min.js"></script>
		<link rel="stylesheet" href="src/css/bootstrap-multiselect.min.css" type="text/css">
		<script type="text/javascript" src="src/js/bootstrap-multiselect.js"></script>
		<script src="app/js/city_list.js"></script>
		<title>Complex chart</title>
	</head>
	<body>
		<div class="container-fluid">
			<div id="" class="row">
				<h1>Complex chart</h1>
			</div>
			<div id="" class="row" style="height: 345px;">
				<div id="" class="col-2">
					<form method="get" action="">
						<div id="" class="">
							<div class="btn-group" role="group">
								<button type="button" class="btn btn-primary" onclick="add_set()">Admin panel</button>
								<button type="button" class="btn btn-warning" onclick="re_set()">Reset</button>
							</div>
						</div>
						<hr><br><hr>
						<div class="t_chart">
							<select id="t_chart-selectAllJustVisible" multiple="multiple">
								<option value="1"> Option 1</option>
							</select>
						</div>
					</form>
				</div>
				<div id="m_chart" class="col-10">
					<canvas id="t_chart"></canvas>
				</div>
			</div>
			<div id="" class="row">
				<div id="" class="col-4">
					
				</div>
			</div>
		</div>
		<script src="src/js/bootstrap-multiselect.js"></script>
		<script src="app/js/app.js"></script>
		<script src="src/js/chart.js"></script>
		<script src="app/js/trading_chart.js"></script>
	</body>
</html>