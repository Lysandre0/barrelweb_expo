import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

function DetailsGamesScreen() {
  return (
    <ScrollView >
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: "https://api.lorem.space/image/game" }} />
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare ligula nec nisl porta aliquet. Morbi at sodales lorem, at posuere est. Nulla nec nibh ex. Nullam semper vestibulum arcu non venenatis. Integer dapibus hendrerit justo id eleifend. Sed iaculis mauris sit amet lacinia pharetra. Etiam commodo nisl ac venenatis condimentum. Vivamus sapien arcu, scelerisque vel tellus vitae, luctus ornare tortor. Sed quis urna vel lectus accumsan efficitur. Suspendisse non ante rutrum, sollicitudin libero non, pretium diam. Integer vel ligula vel sem hendrerit mollis.
          Cras nec euismod turpis. Suspendisse vel finibus lorem, interdum convallis leo. Maecenas semper mauris pharetra, condimentum dui quis, faucibus elit. Mauris commodo fringilla feugiat. Quisque finibus justo non sagittis bibendum. In a leo et tortor sagittis scelerisque sit amet id elit. Quisque eros ante, commodo vel bibendum ut, tristique id eros.
          Aliquam auctor velit dictum, lacinia turpis vel, accumsan erat. Mauris posuere facilisis lobortis. Proin arcu neque, commodo a ligula eu, pellentesque faucibus massa. Curabitur vel ligula varius lacus scelerisque pellentesque non vel lacus. Cras eu aliquet tellus. Curabitur mattis nisi erat, id hendrerit eros dapibus nec. Sed ac tincidunt justo. Mauris dignissim leo nec mi rutrum auctor. In gravida sem eget risus posuere suscipit. Maecenas ultricies ultricies nibh, gravida varius elit aliquet sit amet. Pellentesque elit elit, mattis vitae bibendum fringilla, vehicula nec mauris. Curabitur eu finibus nisl. Phasellus at condimentum mi. Praesent egestas placerat volutpat. Integer ullamcorper finibus dictum.
          In convallis sollicitudin dignissim. Ut nec nulla magna. Vestibulum at venenatis mi, id aliquam libero. Nunc hendrerit auctor purus condimentum dignissim. Maecenas laoreet nisl vel vulputate consequat. Donec dictum, magna eu tempor imperdiet, tortor erat dapibus nisl, vel fringilla nibh lectus in libero. Donec lacinia magna ut lectus egestas imperdiet. Praesent nec tristique nunc. Nulla bibendum massa elementum, convallis mi vel, dictum leo. Vivamus euismod faucibus tellus sit amet sodales. Curabitur a mauris nunc. Integer ex enim, tristique eget bibendum vel, mattis a odio.
          Nam mattis erat dapibus mi commodo luctus. Aliquam eget est a eros ornare facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta gravida rutrum. Nulla efficitur orci tellus, in aliquet mi gravida at. Donec consectetur mauris vitae elit luctus, vel lacinia diam eleifend. Duis sodales bibendum libero sit amet sodales.
          Aliquam nec finibus erat. Fusce sed purus non turpis dictum congue. Etiam commodo sit amet ante sed lobortis. Sed sed laoreet nunc. Vivamus non nunc non sem molestie finibus. Nullam malesuada eu mauris eu ullamcorper. Sed ac augue eget lectus porttitor imperdiet. In ut euismod nulla. Nam quis velit turpis.
          Etiam aliquam semper nunc, in fringilla leo vehicula ac. Praesent vitae eros odio. Nullam nec diam hendrerit, ornare velit at, porttitor magna. Morbi sed libero quis lectus maximus sagittis. Curabitur ultrices auctor leo, eu ultricies enim pharetra sit amet. Maecenas finibus tempor dolor id porttitor. Vivamus varius leo arcu, mollis tincidunt orci egestas a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam eu feugiat risus. Nullam quis velit condimentum, fringilla nulla ac, vestibulum magna. Vivamus condimentum elit ac turpis vehicula fringilla. Duis vestibulum dolor auctor ligula malesuada ultrices. Etiam erat lorem, malesuada ut leo sit amet, volutpat dictum nibh. Fusce vel pharetra quam.
          Nulla a odio lectus. Proin in orci auctor nunc egestas aliquet. Donec ac sollicitudin velit, ut ultricies diam. Integer vel lorem id ex fringilla dapibus. Phasellus at aliquet purus, at semper dui. Fusce suscipit eros felis, vel lacinia orci accumsan non. Pellentesque semper eleifend eros sed maximus. Aenean commodo mattis nisi nec bibendum. Ut tristique, est sit amet eleifend convallis, magna odio egestas enim, ut laoreet neque ligula eget turpis.
          Sed facilisis auctor elementum. Mauris id nulla tortor. Etiam vel odio pharetra, efficitur nibh id, tristique mi. Vestibulum eu dapibus sem. Integer pellentesque mauris id leo varius commodo. In et lorem faucibus, tempus neque non, ultricies nulla. Nam varius congue arcu eget accumsan. Fusce interdum vulputate magna, sed mollis felis auctor sit amet. Nulla nisl turpis, varius eu dapibus sed, vulputate in augue. Praesent placerat, tortor vel posuere euismod, ligula lectus condimentum massa, quis cursus urna quam vel arcu. Nullam condimentum mauris sem, id bibendum elit venenatis in. Etiam feugiat in erat non sagittis. Morbi bibendum massa eros. Vestibulum a consequat orci, eget facilisis orci.
          Morbi sit amet ex metus. Etiam convallis et nibh et porttitor. Fusce eget luctus eros. In eleifend ligula quis neque ultrices, eu consectetur mauris aliquet. Vestibulum condimentum, turpis sed sodales posuere, mi sem dignissim lorem, nec tincidunt nisl dui vel nibh. Duis efficitur dapibus sapien quis scelerisque. Cras id euismod magna. Aliquam vulputate bibendum facilisis. Aenean diam eros, vehicula nec augue ac, aliquam porttitor mi. Donec id lorem vitae erat dapibus vestibulum in sit amet sem. Integer hendrerit neque eu lacus porttitor, et tincidunt lorem dapibus. Nulla quis est varius, dapibus felis quis, semper sem. Curabitur fermentum, tellus tincidunt efficitur vehicula, tortor mi gravida lectus, sit amet porttitor libero mauris sed massa.
        </Text>
      </View>

    </ScrollView >
  );
}

export default DetailsGamesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: '90%',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'justify',
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
  }
});