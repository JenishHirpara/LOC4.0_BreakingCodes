import 'package:flutter/material.dart';
import 'package:qr_gen/screens/qr_page.dart';

class MainDrawer extends StatelessWidget {
  const MainDrawer({Key? key}) : super(key: key);

  Widget buildListTile(String title, IconData icon, Function tapHandler) {
    return ListTile(
      leading: Icon(
        icon,
        size: 26,
      ),
      title: Text(
        title,
        style: const TextStyle(
          fontFamily: 'RobotoCondensed',
          fontSize: 20,
          fontWeight: FontWeight.bold,
        ),
      ),
      onTap: () => tapHandler(),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: Column(
        children: <Widget>[
          Container(
            height: 120,
            width: double.infinity,
            padding: const EdgeInsets.all(20),
            alignment: Alignment
                .centerLeft, // how the child of the Container should be aligned with respect to the Container,
            // here centerLeft means vertically it will be at the center but horizontally to the left
            color: Theme.of(context).accentColor,
            child: Text(
              'Contents!',
              style: TextStyle(
                fontWeight: FontWeight.w900,
                fontSize: 30,
                color: Theme.of(context).primaryColor,
              ),
            ),
          ),
          const SizedBox(
            height: 20,
          ),
          buildListTile(
            'Generate QR code',
            Icons.qr_code,
            () {
              Navigator.of(context).pushReplacementNamed('/');
            },
          ),
          buildListTile(
            'Generate Invoice',
            Icons.picture_as_pdf,
            () {
              Navigator.of(context).pushReplacementNamed(
                QRPage.routeName,
              );
            },
          ),
        ],
      ),
    );
  }
}
