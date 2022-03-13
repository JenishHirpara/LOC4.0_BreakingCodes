import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:qr_flutter/qr_flutter.dart';

class QRPage extends StatefulWidget {
  static const routeName = '/qr-page';
  final String? mobileNumber;

  QRPage({Key? key, this.mobileNumber}) : super(key: key);

  @override
  _QRPageState createState() => _QRPageState();
}

class _QRPageState extends State<QRPage> {
  static const double _topSectionTopPadding = 50.0;
  static const double _topSectionBottomPadding = 20.0;
  GlobalKey globalKey = GlobalKey();

  Widget _contentWidget(String id) {
    return Scaffold(
      appBar: AppBar(),
      body: Column(
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.only(
              top: _topSectionTopPadding,
              left: 20.0,
              right: 10.0,
              bottom: _topSectionBottomPadding,
            ),
            child: Center(
              child: Column(
                children: <Widget>[
                  Text(
                    'Scan this QR code',
                    style: GoogleFonts.montserrat(
                        fontSize: 25, fontStyle: FontStyle.italic),
                  ),
                  const SizedBox(
                    height: 25,
                  ),
                  RepaintBoundary(
                    key: globalKey,
                    child: QrImage(
                      data: id,
                      size: 200,
                    ),
                  ),
                ],
              ),
            ),
          )
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    var id = ModalRoute.of(context)!.settings.arguments as Map<String, String>;
    print(id['id']);
    return _contentWidget(id['id']!);
  }
}
