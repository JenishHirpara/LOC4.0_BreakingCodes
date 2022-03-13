import 'package:flutter/material.dart';
import 'package:qr_gen/screens/display_image.dart';
import 'package:qr_gen/screens/gen_invoice.dart';
import 'package:qr_gen/screens/tabs_screen.dart';
import 'package:qr_gen/screens/track_order.dart';

import './screens/qr_page.dart';

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
      title: 'LOC 4.0',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        accentColor: Colors.amber,
        canvasColor: const Color.fromRGBO(255, 254, 229, 1),
        textTheme: ThemeData.light().textTheme.copyWith(
              bodyText2: const TextStyle(
                color: Color.fromRGBO(20, 51, 51, 1),
              ),
              bodyText1: const TextStyle(
                color: Color.fromRGBO(20, 51, 51, 1),
              ),
              headline6: const TextStyle(
                fontSize: 20,
                fontFamily: 'RobotoCondensed',
                fontWeight: FontWeight.bold,
              ),
            ),
      ),
      initialRoute: '/',
      routes: {
        '/': (ctx) => const GenerateInvoice(),
        QRPage.routeName: (ctx) => QRPage(
              mobileNumber: '1234567890',
            ),
        DisplayImage.routeName: (ctx) => const DisplayImage(),
        TrackOrder.routeName: (ctx) => const TrackOrder(),
      },
    );
  }
}
