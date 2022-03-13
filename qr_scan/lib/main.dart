import 'package:flutter/material.dart';
import 'package:qr_scan/screens/billing_info.dart';
import 'package:qr_scan/screens/datapage.dart';
import 'package:qr_scan/screens/home_screen.dart';
import './screens/datapage.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        debugShowCheckedModeBanner: false,
        title: 'Flutter Demo',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: const HomeScreen(),
        routes: {
          DataPage.routeName: (ctx) => const DataPage(),
          BillingInfo.routeName: (ctx) => const BillingInfo(),
        });
  }
}
