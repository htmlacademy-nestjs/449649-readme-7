import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'User unique address',
    example: 'ivan@mail.ru'
  })
  public email: string;

  @ApiProperty({
    description: 'User first name',
    example: 'Ivan',
  })
  public firstname: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Ivanov'
  })
  public lastname: string;

  @ApiProperty({
    description: 'Valid URL',
    example: 'https://15.design.htmlacademy.pro/static/avatar/4.jpg'
  })
  public avatarUrl: string;

  @ApiProperty({
    description: 'User password',
    example: '1234567'
  })
  public password: string;
}
