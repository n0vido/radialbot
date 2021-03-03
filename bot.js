const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const { MessageEmbed } = require('discord.js');
const prefix = ayarlar.prefix
client.on('ready', () => {
    client.user.setActivity('!yardım')
    console.log('Girdim!')
});
client.on('message', message => {
    if(message.content.startsWith(prefix + 'ekayıt')) {
        if(!message.member.roles.cache.has('816346256515268619')) return message.channel.send('Bunu yapmak için yetkin bulunmamaktadır!');
        const erkek = message.mentions.guild.roles.cache.find(rk => rk.id === '816275063636623411');
        const kayıtsız = message.mentions.guild.roles.cache.find(ky => ky.id === '816275042748989460');
        const kanal = message.mentions.guild.channels.cache.find(ch => ch.id === '816287121936875540');
        const kisi = message.mentions.users.first();
        const args = message.content.split(' ').slice(2)
        const isim = args.join(" • ")
        const member = message.mentions.members.first();
        member.roles.add(erkek)
        member.roles.remove(kayıtsız);
        member.setNickname('ϟ' + isim);
        const embed = new MessageEmbed()
        .setTitle('RADİAL EKİBİNE HOŞGELDİN')
        .addField('Katılan kişi:', `${member}`)
        .addField('Rolü:', `${erkek}`)
        .addField('KAYIT EDEN:', `${message.author}`)
        .setFooter(message.author.tag)
        .setTimestamp(Date.now())
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 4096 }));
        kanal.send(embed)
    }
});
client.on('message', message => {
    if(message.content.startsWith(prefix + 'kkayıt')) {
        if(!message.member.roles.cache.has('816346256515268619')) return message.channel.send('Bunu yapmak için yetkin bulunmamaktadır!');
        const kız = message.mentions.guild.roles.cache.find(rk => rk.id === '816275753921806346');
        const kayıtsız = message.mentions.guild.roles.cache.find(ky => ky.id === '816275042748989460');
        const kanal = message.mentions.guild.channels.cache.find(ch => ch.id === '816287121936875540');
        const kisis = message.mentions.users.first();
        const args1 = message.content.split(' ').slice(2)
        const isimk = args1.join(" • ")
        const member = message.mentions.members.first();
        member.roles.add(kız)
        member.roles.remove(kayıtsız);
        member.setNickname('ϟ' + isimk);
        const embed = new MessageEmbed()
        .setTitle('RADİAL EKİBİNE HOŞGELDİN')
        .addField('Katılan kişi:', `${member}`)
        .addField('Rolü:', `${kız}`)
        .addField('KAYIT EDEN:', `${message.author}`)
        .setFooter(message.author.tag)
        .setTimestamp(Date.now())
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 4096 }));
        kanal.send(embed)
    }
});
client.on('message', message => {
    if(message.content.startsWith(prefix + 'kayıtsız')) {
        if(!message.member.roles.cache.has('816346256515268619')) return message.channel.send('Bunu yapmak için yetkin bulunmamaktadır!');
        const kız = message.mentions.guild.roles.cache.find(kız => kız.id === '816275753921806346');
        const erkek = message.mentions.guild.roles.cache.find(erkek => erkek.id === '816275063636623411');
        const kayıtsız = message.mentions.guild.roles.cache.find(ky => ky.id === '816275042748989460');
        const member = message.mentions.members.first();
        const embed = new MessageEmbed()
        .setTitle('ROLLER ALINDI')
        .addField('KİŞİ:', `${member}`)
        .addField('ALINAN ROLLER:', `${kız},${erkek}`)
        .addField('ALAN KİŞİ:', `${message.author}`)
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 4096 }))
        .setTimestamp(Date.now())
        member.roles.remove(kız)
        member.roles.remove(erkek)
        member.roles.add(kayıtsız);
        member.setNickname('ϟİsim • Yaş');
        message.channel.send(embed)
    }
});
client.on('guildMemberAdd', member => {
    const kanal = member.guild.channels.cache.find(ch => ch.id === '816339627744428073')
    kanal.send(`${member},Aramıza katıldı!`)
});
client.on('guildMemberRemove', member => {
    const kanal = member.guild.channels.cache.find(ch => ch.id === '816339627744428073')
    kanal.send(`${member},Aramızdan ayrıldı!`)
});
client.on('message', message => {
    if(message.content.startsWith(prefix + 'yardım')) {
        if(!message.member.roles.cache.has('816346256515268619')) return message.channel.send('Yapamadın!');
        const embed = new MessageEmbed()
        .setTitle('**YETKİLİ YARDIM MENÜSÜ**')
        .setColor('RANDOM')
        .setAuthor(message.author.username)
        .addField(prefix + 'ekayıt', 'Örnek : !ekayıt @ϟİsim • Yaş İsmail 18')
        .addField(prefix + 'kkayıt', 'Örnek : !kkayıt @ϟİsim • Yaş Aleyna 17')
        .addField(prefix + 'kayıtsız', 'Örnek : !kayıtsız @ϟİsim • Yaş rollerini geri alır.')
        .addField(prefix + 'aile', 'Örnek : !aile @OwnerCoder `Family Of Radial` rolünü verir.')
        .addField(prefix + 'vip', 'Örnek : !vip @OwnerCoder `Vip` rolünü kişiye verir.')
        .addField(prefix + 'tag', 'Atıldığı kanala tag sembolünü spawnlar.')
        .addField(prefix + 'invite', 'Botun davet linkini özelden atar!')
        .addField(prefix + 'avatar', 'Örnek : !avatar kendi avatarınızı gösterir. !avatar @OwnerCoder arkadaşınızın avatarını gösterir.')
        .addField(prefix + 'ping', 'Botun gecikme süresini gösterir.')
        .setImage('https://r.resimlink.com/akA1L.gif')
        .addField('Bağlantılar', '[Discord](https://discord.gg/jV7TMhTfc6)\n[Youtube](https://www.youtube.com/channel/UCt33DIxUiFt_9MFkZADOqfg)\n[Twitter](https://twitter.com/smail82493502)\n[GitHub](https://github.com/n0vido)')
        message.author.send(embed)
    }
});
client.on('guildMemberAdd', member => {
    member.setNickname('ϟİsim • Yaş')
});
client.on('message', message => {
    if(message.content.startsWith(prefix + 'aile')) {
        if(!message.member.roles.cache.has('816346256515268619')) return message.channel.send('Yapamadın!');
        const ail = message.mentions.guild.roles.cache.find(ail => ail.id === '816284074867818537');
        const member = message.mentions.members.first();
        const embed = new MessageEmbed()
        .setTitle('AİLEMİZE HOŞGELDİN!')
        .addField('KİŞİ:', `${member}`)
        .addField('VERİLEN ROL', `${ail}`)
        .addField('VEREN YETKİLİ:', `${message.author}`)
        .setTimestamp(Date.now())
        member.roles.add(ail)
        message.channel.send(embed)
    }
});
client.on('message', message => {
    if(message.content.startsWith(prefix + 'tag')) {
        if(!message.member.roles.cache.has('816284074867818537')) return message.channel.send('Yapamadın!');
        const embed = new MessageEmbed()
        .setTitle('ϟ')
        message.channel.send(embed)
    }
});
client.on('guildMemberAdd', member => {
    const kayıtsz = member.guild.roles.cache.find(kt => kt.id === '816275042748989460');
    const yt = member.guild.roles.cache.find(yti => yti.id === '816346256515268619');
    const canal = member.guild.channels.cache.find(cha => cha.id === '816328995397959710');
    const embed = new MessageEmbed()
    .setTitle('HOŞGELDİNİZ!')
    .addField('Giriş yapan kişi:', `${member}`)
    .addField('Rolü:', `${kayıtsz}`)
    .addField('Yetkili:', `${yt}`)
    .setColor('GREEN')
    .addField('Mesajın atıldığı konum:', `${canal}`)
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 4096 }))
    .setImage('https://r.resimlink.com/Rrby.gif')
    .setTimestamp(Date.now())
    canal.send(embed);
    member.roles.add(kayıtsz)
});
client.on('message', message => {
    if(message.content.startsWith(prefix + 'vip')) {
        if(!message.member.roles.cache.has('816346256515268619')) return message.channel.send('Bunu yapmak için malesef yetkin bulunmamaktadır!');
        const vp = message.mentions.guild.roles.cache.find(ip => ip.id === '816563357066854400')
        const kisi = message.mentions.members.first();
        const member = message.mentions.guild.members.cache.first();
        const embed = new MessageEmbed()
        .setTitle('VİP ROLÜ')
        .addField('Verilen Rol:', `${vp}`)
        .addField('Veren Kişi:', `${message.author}`)
        .addField('Alan Kişi:', `${kisi}`)
        .addField('Kişinin adı:', `${kisi.user.tag}`)
        .setThumbnail(kisi.user.displayAvatarURL({ dynamic: true, size: 4096 }))
        .setTimestamp(Date.now())
        kisi.roles.add(vp)
        message.channel.send(embed)
    }
});
client.on('message', message => {
    if(message.content.startsWith(prefix + 'avatar')) {
        const member = message.mentions.guild.members.cache.first();
        const user = message.mentions.users.first();
        if(user) {
            const embed = new MessageEmbed()
            .setTitle('Avatarı')
            .setImage(user.displayAvatarURL({ dynamic: true, size: 4096 }))
            .setTimestamp(Date.now())
            message.channel.send(embed)
        } else {
            const embed = new MessageEmbed()
            .setTitle('Avatarınız')
            .setImage(message.author.displayAvatarURL({ dynamic: true, size: 4096 }))
            .setTimestamp(Date.now())
            message.channel.send(embed)
        }
    }
});
client.on('message', message => {
    if(message.content.startsWith(prefix + 'ping')) {
        const embed = new MessageEmbed()
        .setTitle('PİNG ÖLÇÜLÜYOR')
        .addField('Bot pingi:', client.ws.ping + 'ms')
        .addField('Mesaj gecikme süresi:', `${Date.now() - message.createdTimestamp} ms`)
        message.channel.send(embed)
    }
});
client.on('message', message => {
    if(message.content.startsWith(prefix + 'invite')) {
        if(!message.member.roles.cache.has('816346256515268619')) return message.channel.send('Bunu yapmak için malesef yetkin bulunmamaktadır!');
     const embed = new MessageEmbed()
     .setTitle('Discord İnvite Link;')
     .addField('Link:', `https://discord.com/oauth2/authorize?client_id=${message.client.user.id}&permissions=70282305&scope=bot`)
      message.author.send(embed)
}
});
client.login(ayarlar.token);